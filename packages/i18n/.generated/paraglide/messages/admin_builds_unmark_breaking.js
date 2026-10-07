/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Unmark_BreakingInputs */

const en_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove breaking mark`)
};

const es_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar la marca de que rompe mods`)
};

const de_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markierung „inkompatibel“ entfernen`)
};

const fr_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la mention « casse les mods »`)
};

const it_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi il segno «rompe le mod»`)
};

const nl_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markering breekt mods verwijderen`)
};

const pl_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń oznaczenie psującego mody`)
};

const pt_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover a marca de quebra mods`)
};

const ru_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять пометку «ломает моды»`)
};

const sv_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort markeringen bryter moddar`)
};

const tr_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozuyor işaretini kaldır`)
};

const zh_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消破坏性标记`)
};

const ja_admin_builds_unmark_breaking = /** @type {(inputs: Admin_Builds_Unmark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的のマークを外す`)
};

/**
* | output |
* | --- |
* | "Remove breaking mark" |
*
* @param {Admin_Builds_Unmark_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_unmark_breaking = /** @type {((inputs?: Admin_Builds_Unmark_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Unmark_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_unmark_breaking(inputs)
	if (locale === "de") return de_admin_builds_unmark_breaking(inputs)
	if (locale === "fr") return fr_admin_builds_unmark_breaking(inputs)
	if (locale === "it") return it_admin_builds_unmark_breaking(inputs)
	if (locale === "nl") return nl_admin_builds_unmark_breaking(inputs)
	if (locale === "pl") return pl_admin_builds_unmark_breaking(inputs)
	if (locale === "pt") return pt_admin_builds_unmark_breaking(inputs)
	if (locale === "ru") return ru_admin_builds_unmark_breaking(inputs)
	if (locale === "sv") return sv_admin_builds_unmark_breaking(inputs)
	if (locale === "tr") return tr_admin_builds_unmark_breaking(inputs)
	if (locale === "zh") return zh_admin_builds_unmark_breaking(inputs)
	if (locale === "ja") return ja_admin_builds_unmark_breaking(inputs)
	return en_admin_builds_unmark_breaking(inputs)
});
