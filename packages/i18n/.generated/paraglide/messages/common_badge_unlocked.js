/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ badge: NonNullable<unknown> }} Common_Badge_UnlockedInputs */

const en_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge unlocked: ${i?.badge}`)
};

const es_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insignia desbloqueada: ${i?.badge}`)
};

const de_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abzeichen freigeschaltet: ${i?.badge}`)
};

const fr_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge débloqué : ${i?.badge}`)
};

const it_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Distintivo sbloccato: ${i?.badge}`)
};

const nl_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge ontgrendeld: ${i?.badge}`)
};

const pl_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odblokowano odznakę: ${i?.badge}`)
};

const pt_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insígnia desbloqueada: ${i?.badge}`)
};

const ru_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Получен значок: ${i?.badge}`)
};

const sv_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Märke upplåst: ${i?.badge}`)
};

const tr_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozet açıldı: ${i?.badge}`)
};

const zh_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解锁徽章：${i?.badge}`)
};

const ja_common_badge_unlocked = /** @type {(inputs: Common_Badge_UnlockedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バッジを獲得：${i?.badge}`)
};

/**
* | output |
* | --- |
* | "Badge unlocked: {badge}" |
*
* @param {Common_Badge_UnlockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_badge_unlocked = /** @type {((inputs: Common_Badge_UnlockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Badge_UnlockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_badge_unlocked(inputs)
	if (locale === "de") return de_common_badge_unlocked(inputs)
	if (locale === "fr") return fr_common_badge_unlocked(inputs)
	if (locale === "it") return it_common_badge_unlocked(inputs)
	if (locale === "nl") return nl_common_badge_unlocked(inputs)
	if (locale === "pl") return pl_common_badge_unlocked(inputs)
	if (locale === "pt") return pt_common_badge_unlocked(inputs)
	if (locale === "ru") return ru_common_badge_unlocked(inputs)
	if (locale === "sv") return sv_common_badge_unlocked(inputs)
	if (locale === "tr") return tr_common_badge_unlocked(inputs)
	if (locale === "zh") return zh_common_badge_unlocked(inputs)
	if (locale === "ja") return ja_common_badge_unlocked(inputs)
	return en_common_badge_unlocked(inputs)
});
