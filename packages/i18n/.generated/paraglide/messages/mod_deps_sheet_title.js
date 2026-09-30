/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ names: NonNullable<unknown> }} Mod_Deps_Sheet_TitleInputs */

const en_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You also need ${i?.names}`)
};

const es_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`También necesitas ${i?.names}`)
};

const de_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du brauchst auch ${i?.names}`)
};

const fr_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il vous faut aussi ${i?.names}`)
};

const it_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ti serve anche ${i?.names}`)
};

const nl_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt ook ${i?.names} nodig`)
};

const pl_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Potrzebujesz też ${i?.names}`)
};

const pt_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você também precisa de ${i?.names}`)
};

const ru_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Также нужно: ${i?.names}`)
};

const sv_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du behöver också ${i?.names}`)
};

const tr_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Şunlara da ihtiyacın var: ${i?.names}`)
};

const zh_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你还需要 ${i?.names}`)
};

const ja_mod_deps_sheet_title = /** @type {(inputs: Mod_Deps_Sheet_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.names} も必要です`)
};

/**
* | output |
* | --- |
* | "You also need {names}" |
*
* @param {Mod_Deps_Sheet_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_deps_sheet_title = /** @type {((inputs: Mod_Deps_Sheet_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Sheet_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_deps_sheet_title(inputs)
	if (locale === "de") return de_mod_deps_sheet_title(inputs)
	if (locale === "fr") return fr_mod_deps_sheet_title(inputs)
	if (locale === "it") return it_mod_deps_sheet_title(inputs)
	if (locale === "nl") return nl_mod_deps_sheet_title(inputs)
	if (locale === "pl") return pl_mod_deps_sheet_title(inputs)
	if (locale === "pt") return pt_mod_deps_sheet_title(inputs)
	if (locale === "ru") return ru_mod_deps_sheet_title(inputs)
	if (locale === "sv") return sv_mod_deps_sheet_title(inputs)
	if (locale === "tr") return tr_mod_deps_sheet_title(inputs)
	if (locale === "zh") return zh_mod_deps_sheet_title(inputs)
	if (locale === "ja") return ja_mod_deps_sheet_title(inputs)
	return en_mod_deps_sheet_title(inputs)
});
