/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Col_ReleasedInputs */

const en_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Released`)
};

const es_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicada`)
};

const de_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorti le`)
};

const it_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscita`)
};

const nl_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgebracht`)
};

const pl_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydany`)
};

const pt_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançado em`)
};

const ru_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выход`)
};

const sv_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släppt`)
};

const tr_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış`)
};

const zh_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布日期`)
};

const ja_admin_builds_col_released = /** @type {(inputs: Admin_Builds_Col_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース日`)
};

/**
* | output |
* | --- |
* | "Released" |
*
* @param {Admin_Builds_Col_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_col_released = /** @type {((inputs?: Admin_Builds_Col_ReleasedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Col_ReleasedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_col_released(inputs)
	if (locale === "de") return de_admin_builds_col_released(inputs)
	if (locale === "fr") return fr_admin_builds_col_released(inputs)
	if (locale === "it") return it_admin_builds_col_released(inputs)
	if (locale === "nl") return nl_admin_builds_col_released(inputs)
	if (locale === "pl") return pl_admin_builds_col_released(inputs)
	if (locale === "pt") return pt_admin_builds_col_released(inputs)
	if (locale === "ru") return ru_admin_builds_col_released(inputs)
	if (locale === "sv") return sv_admin_builds_col_released(inputs)
	if (locale === "tr") return tr_admin_builds_col_released(inputs)
	if (locale === "zh") return zh_admin_builds_col_released(inputs)
	if (locale === "ja") return ja_admin_builds_col_released(inputs)
	return en_admin_builds_col_released(inputs)
});
