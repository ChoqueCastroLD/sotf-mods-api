/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Versions_UnyankedInputs */

const en_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} is available again`)
};

const es_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La v${i?.version} vuelve a estar disponible`)
};

const de_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} ist wieder verfügbar`)
};

const fr_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La v${i?.version} est de nouveau disponible`)
};

const it_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La v${i?.version} è di nuovo disponibile`)
};

const nl_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} is weer beschikbaar`)
};

const pl_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} jest znów dostępna`)
};

const pt_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A v${i?.version} está disponível de novo`)
};

const ru_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} снова доступна`)
};

const sv_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} är tillgänglig igen`)
};

const tr_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} yeniden kullanılabilir`)
};

const zh_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} 已恢复可用`)
};

const ja_basecamp_versions_unyanked = /** @type {(inputs: Basecamp_Versions_UnyankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} が再び利用可能になりました`)
};

/**
* | output |
* | --- |
* | "v{version} is available again" |
*
* @param {Basecamp_Versions_UnyankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_unyanked = /** @type {((inputs: Basecamp_Versions_UnyankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_UnyankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_unyanked(inputs)
	if (locale === "de") return de_basecamp_versions_unyanked(inputs)
	if (locale === "fr") return fr_basecamp_versions_unyanked(inputs)
	if (locale === "it") return it_basecamp_versions_unyanked(inputs)
	if (locale === "nl") return nl_basecamp_versions_unyanked(inputs)
	if (locale === "pl") return pl_basecamp_versions_unyanked(inputs)
	if (locale === "pt") return pt_basecamp_versions_unyanked(inputs)
	if (locale === "ru") return ru_basecamp_versions_unyanked(inputs)
	if (locale === "sv") return sv_basecamp_versions_unyanked(inputs)
	if (locale === "tr") return tr_basecamp_versions_unyanked(inputs)
	if (locale === "zh") return zh_basecamp_versions_unyanked(inputs)
	if (locale === "ja") return ja_basecamp_versions_unyanked(inputs)
	return en_basecamp_versions_unyanked(inputs)
});
