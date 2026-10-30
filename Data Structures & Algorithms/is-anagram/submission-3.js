class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sl = s.length;
    const tl = t.length;
    if (sl != tl) return false;
    const sMap = new Map(); 
    const tMap = new Map(); 
    for (let i = 0; i < s.length; i++) {
      const occ = sMap.get(s[i])
      sMap.set(s[i], occ ? occ + 1 : 1);
    }
    for (let i = 0; i < t.length; i++) {
      const occ = tMap.get(t[i])
      tMap.set(t[i], occ ? occ + 1 : 1);
    }
    for (const [key,occ] of sMap){
      const tocc=tMap.get(key);
       if (tocc=== undefined ||  tocc!==occ) {
        return false;
      } 
    }
    
    return true
  }
}
