/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Unbreaking_DoneInputs */

const en_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} is no longer marked as breaking`)
};

const es_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} ya no está marcada como que rompe mods`)
};

const de_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} ist nicht mehr als inkompatibel markiert`)
};

const fr_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} n’est plus marqué comme cassant les mods`)
};

const it_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} non è più segnata come build che rompe le mod`)
};

const nl_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} is niet langer gemarkeerd als breekt mods`)
};

const pl_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} nie jest już oznaczony jako psujący mody`)
};

const pt_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} não está mais marcado como quebra mods`)
};

const ru_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`С ${i?.label} снята пометка «ломает моды»`)
};

const sv_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} är inte längre markerat som bryter moddar`)
};

const tr_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} artık modları bozuyor olarak işaretli değil`)
};

const zh_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已取消 ${i?.label} 的破坏性标记`)
};

const ja_admin_builds_unbreaking_done = /** @type {(inputs: Admin_Builds_Unbreaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} の破壊的マークを外しました`)
};

/**
* | output |
* | --- |
* | "{label} is no longer marked as breaking" |
*
* @param {Admin_Builds_Unbreaking_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_unbreaking_done = /** @type {((inputs: Admin_Builds_Unbreaking_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Unbreaking_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_unbreaking_done(inputs)
	if (locale === "de") return de_admin_builds_unbreaking_done(inputs)
	if (locale === "fr") return fr_admin_builds_unbreaking_done(inputs)
	if (locale === "it") return it_admin_builds_unbreaking_done(inputs)
	if (locale === "nl") return nl_admin_builds_unbreaking_done(inputs)
	if (locale === "pl") return pl_admin_builds_unbreaking_done(inputs)
	if (locale === "pt") return pt_admin_builds_unbreaking_done(inputs)
	if (locale === "ru") return ru_admin_builds_unbreaking_done(inputs)
	if (locale === "sv") return sv_admin_builds_unbreaking_done(inputs)
	if (locale === "tr") return tr_admin_builds_unbreaking_done(inputs)
	if (locale === "zh") return zh_admin_builds_unbreaking_done(inputs)
	if (locale === "ja") return ja_admin_builds_unbreaking_done(inputs)
	return en_admin_builds_unbreaking_done(inputs)
});
