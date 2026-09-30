/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tier: NonNullable<unknown>, downloads: NonNullable<unknown> }} Basecamp_Badges_Tier_CurrentInputs */

const en_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} lifetime downloads`)
};

const es_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} descargas en total`)
};

const de_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} Downloads insgesamt`)
};

const fr_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} téléchargements au total`)
};

const it_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} download in totale`)
};

const nl_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} downloads in totaal`)
};

const pl_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · łącznie pobrań: ${i?.downloads}`)
};

const pt_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} downloads no total`)
};

const ru_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · всего загрузок: ${i?.downloads}`)
};

const sv_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · ${i?.downloads} nedladdningar totalt`)
};

const tr_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · toplam ${i?.downloads} indirme`)
};

const zh_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · 累计 ${i?.downloads} 次下载`)
};

const ja_basecamp_badges_tier_current = /** @type {(inputs: Basecamp_Badges_Tier_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} · 累計 ${i?.downloads} ダウンロード`)
};

/**
* | output |
* | --- |
* | "{tier} · {downloads} lifetime downloads" |
*
* @param {Basecamp_Badges_Tier_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_tier_current = /** @type {((inputs: Basecamp_Badges_Tier_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_tier_current(inputs)
	if (locale === "de") return de_basecamp_badges_tier_current(inputs)
	if (locale === "fr") return fr_basecamp_badges_tier_current(inputs)
	if (locale === "it") return it_basecamp_badges_tier_current(inputs)
	if (locale === "nl") return nl_basecamp_badges_tier_current(inputs)
	if (locale === "pl") return pl_basecamp_badges_tier_current(inputs)
	if (locale === "pt") return pt_basecamp_badges_tier_current(inputs)
	if (locale === "ru") return ru_basecamp_badges_tier_current(inputs)
	if (locale === "sv") return sv_basecamp_badges_tier_current(inputs)
	if (locale === "tr") return tr_basecamp_badges_tier_current(inputs)
	if (locale === "zh") return zh_basecamp_badges_tier_current(inputs)
	if (locale === "ja") return ja_basecamp_badges_tier_current(inputs)
	return en_basecamp_badges_tier_current(inputs)
});
