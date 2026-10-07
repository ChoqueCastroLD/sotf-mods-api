/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Breaking_Confirm_TitleInputs */

const en_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mark ${i?.label} as breaking?`)
};

const es_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Marcar ${i?.label} como que rompe mods?`)
};

const de_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} als inkompatibel markieren?`)
};

const fr_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marquer ${i?.label} comme cassant les mods ?`)
};

const it_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnare ${i?.label} come build che rompe le mod?`)
};

const nl_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} markeren als breekt mods?`)
};

const pl_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznaczyć ${i?.label} jako psujący mody?`)
};

const pt_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar ${i?.label} como quebra mods?`)
};

const ru_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пометить ${i?.label} как ломающую моды?`)
};

const sv_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ${i?.label} som bryter moddar?`)
};

const tr_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} modları bozuyor olarak işaretlensin mi?`)
};

const zh_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.label} 标记为破坏性？`)
};

const ja_admin_builds_breaking_confirm_title = /** @type {(inputs: Admin_Builds_Breaking_Confirm_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を破壊的としてマークしますか？`)
};

/**
* | output |
* | --- |
* | "Mark {label} as breaking?" |
*
* @param {Admin_Builds_Breaking_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_breaking_confirm_title = /** @type {((inputs: Admin_Builds_Breaking_Confirm_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_Confirm_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_breaking_confirm_title(inputs)
	if (locale === "de") return de_admin_builds_breaking_confirm_title(inputs)
	if (locale === "fr") return fr_admin_builds_breaking_confirm_title(inputs)
	if (locale === "it") return it_admin_builds_breaking_confirm_title(inputs)
	if (locale === "nl") return nl_admin_builds_breaking_confirm_title(inputs)
	if (locale === "pl") return pl_admin_builds_breaking_confirm_title(inputs)
	if (locale === "pt") return pt_admin_builds_breaking_confirm_title(inputs)
	if (locale === "ru") return ru_admin_builds_breaking_confirm_title(inputs)
	if (locale === "sv") return sv_admin_builds_breaking_confirm_title(inputs)
	if (locale === "tr") return tr_admin_builds_breaking_confirm_title(inputs)
	if (locale === "zh") return zh_admin_builds_breaking_confirm_title(inputs)
	if (locale === "ja") return ja_admin_builds_breaking_confirm_title(inputs)
	return en_admin_builds_breaking_confirm_title(inputs)
});
