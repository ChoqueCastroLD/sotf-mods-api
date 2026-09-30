/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_New_Version_MoreInputs */

const en_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More in My mods: ${i?.count}`)
};

const es_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Más en Mis mods: ${i?.count}`)
};

const de_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mehr unter Meine Mods: ${i?.count}`)
};

const fr_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`D’autres dans Mes mods : ${i?.count}`)
};

const it_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Altre in Le mie mod: ${i?.count}`)
};

const nl_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meer in Mijn mods: ${i?.count}`)
};

const pl_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Więcej w Moich modach: ${i?.count}`)
};

const pt_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais em Meus mods: ${i?.count}`)
};

const ru_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ещё в разделе «Мои моды»: ${i?.count}`)
};

const sv_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fler under Mina moddar: ${i?.count}`)
};

const tr_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modlarım’da daha fazlası: ${i?.count}`)
};

const zh_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“我的模组”中还有：${i?.count}`)
};

const ja_upload_new_version_more = /** @type {(inputs: Upload_New_Version_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「マイMOD」にほか ${i?.count} 件`)
};

/**
* | output |
* | --- |
* | "More in My mods: {count}" |
*
* @param {Upload_New_Version_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_version_more = /** @type {((inputs: Upload_New_Version_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Version_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_version_more(inputs)
	if (locale === "de") return de_upload_new_version_more(inputs)
	if (locale === "fr") return fr_upload_new_version_more(inputs)
	if (locale === "it") return it_upload_new_version_more(inputs)
	if (locale === "nl") return nl_upload_new_version_more(inputs)
	if (locale === "pl") return pl_upload_new_version_more(inputs)
	if (locale === "pt") return pt_upload_new_version_more(inputs)
	if (locale === "ru") return ru_upload_new_version_more(inputs)
	if (locale === "sv") return sv_upload_new_version_more(inputs)
	if (locale === "tr") return tr_upload_new_version_more(inputs)
	if (locale === "zh") return zh_upload_new_version_more(inputs)
	if (locale === "ja") return ja_upload_new_version_more(inputs)
	return en_upload_new_version_more(inputs)
});
