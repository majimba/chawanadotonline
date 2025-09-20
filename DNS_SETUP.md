# DNS Setup Guide for chawana.online

## 🌐 Complete DNS Configuration for Netlify

This guide will walk you through setting up your DNS records to point your `chawana.online` domain to Netlify.

---

## 📋 Prerequisites

- ✅ Domain registered (chawana.online)
- ✅ Netlify account created
- ✅ Website deployed to Netlify
- ✅ Access to your domain registrar's DNS management panel

---

## 🚀 Step-by-Step DNS Setup

### Step 1: Get Your Netlify Site URL

1. Go to your Netlify dashboard
2. Click on your deployed site
3. Go to **Site Settings** → **Domain Management**
4. Note your site's Netlify URL (e.g., `amazing-chawana-123456.netlify.app`)

### Step 2: Add Custom Domain in Netlify

1. In **Domain Management**, click **Add custom domain**
2. Enter: `chawana.online`
3. Click **Verify** (this will fail initially - that's expected)
4. Netlify will show you the DNS records you need to configure

### Step 3: Configure DNS Records

Go to your domain registrar's DNS management panel and add these records:

#### Option A: Using A Records (Recommended)

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600 (or default)

Type: A
Name: @
Value: 99.83.190.102
TTL: 3600 (or default)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600 (or default)
```

#### Option B: Using CNAME (Alternative)

```
Type: CNAME
Name: @
Value: your-site-name.netlify.app
TTL: 3600 (or default)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600 (or default)
```

---

## 🔧 DNS Configuration by Registrar

### Namecheap
1. Login to Namecheap
2. Go to **Domain List** → **Manage** next to chawana.online
3. Go to **Advanced DNS** tab
4. Delete existing A records for @ and www
5. Add the records above
6. Save changes

### GoDaddy
1. Login to GoDaddy
2. Go to **My Products** → **DNS** next to chawana.online
3. Click **Manage DNS**
4. Delete existing A records
5. Add the records above
6. Save changes

### Google Domains
1. Login to Google Domains
2. Click on chawana.online
3. Go to **DNS** tab
4. Delete existing records
5. Add the records above
6. Save changes

### Cloudflare
1. Login to Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Delete existing A records
5. Add the records above
6. Set **Proxy status** to **DNS only** (gray cloud)

---

## ⏱️ DNS Propagation Timeline

- **Initial propagation:** 5-15 minutes
- **Full global propagation:** 24-48 hours
- **Most users will see changes:** Within 1-2 hours

---

## ✅ Verification Steps

### 1. Check DNS Propagation
Use these tools to verify your DNS is working:
- [whatsmydns.net](https://www.whatsmydns.net)
- [dnschecker.org](https://dnschecker.org)
- [mxtoolbox.com](https://mxtoolbox.com)

### 2. Test Your Domain
- Visit `http://chawana.online` (should redirect to HTTPS)
- Visit `https://chawana.online` (should show your site)
- Visit `https://www.chawana.online` (should redirect to non-www)

### 3. Netlify Verification
1. Go back to Netlify **Domain Management**
2. Click **Verify** next to your domain
3. Status should change to **Verified** ✅

---

## 🔒 SSL Certificate Setup

Once DNS is verified:
1. Netlify will automatically provision an SSL certificate
2. This usually takes 5-10 minutes
3. Your site will be accessible via HTTPS
4. HTTP traffic will automatically redirect to HTTPS

---

## 🚨 Troubleshooting

### Common Issues

**Domain not resolving:**
- Wait 15-30 minutes for DNS propagation
- Check if you entered the correct Netlify site URL
- Verify TTL settings (lower = faster propagation)

**SSL certificate not working:**
- Ensure DNS is fully propagated first
- Check that both @ and www records are correct
- Wait up to 24 hours for certificate provisioning

**Redirects not working:**
- Check your `_redirects` file is in the root directory
- Verify Netlify has detected the redirects
- Clear browser cache

### DNS Record Verification

Make sure your records look exactly like this:

```
@    A    75.2.60.5
@    A    99.83.190.102
www  CNAME your-site-name.netlify.app
```

**Important:** Replace `your-site-name.netlify.app` with your actual Netlify site URL.

---

## 📱 Mobile DNS Testing

Test on mobile devices:
1. Turn off WiFi (use cellular data)
2. Clear browser cache
3. Visit chawana.online
4. Should load your Netlify site

---

## 🔄 After DNS Setup

### 1. Update Netlify Settings
- Go to **Site Settings** → **Domain Management**
- Set `chawana.online` as primary domain
- Enable **Force HTTPS**

### 2. Test All Features
- [ ] Homepage loads correctly
- [ ] Contact form works
- [ ] Mobile menu functions
- [ ] All images load
- [ ] Newsletter signup works

### 3. Set Up Monitoring
- Enable Netlify Analytics
- Set up uptime monitoring
- Configure form notifications

---

## 📞 Support

### If DNS Setup Fails
1. **Check with your registrar** - some have specific requirements
2. **Contact Netlify support** - they can help with domain issues
3. **Use Netlify's DNS** - transfer DNS management to Netlify (easier option)

### Netlify DNS (Easier Alternative)
If you want to avoid DNS configuration:
1. Transfer DNS management to Netlify
2. Netlify handles all DNS records automatically
3. Just point your domain's nameservers to Netlify

---

## 🎯 Quick Reference

**Your DNS Records:**
```
@    A    75.2.60.5
@    A    99.83.190.102  
www  CNAME your-site-name.netlify.app
```

**Expected Results:**
- ✅ chawana.online → Your website
- ✅ www.chawana.online → Your website  
- ✅ http:// → Redirects to https://
- ✅ SSL certificate active

**Timeline:**
- DNS changes: 5-15 minutes
- SSL certificate: 5-10 minutes after DNS
- Full propagation: 24-48 hours

---

*Last updated: January 2025*
*For technical support, contact your domain registrar or Netlify support*

