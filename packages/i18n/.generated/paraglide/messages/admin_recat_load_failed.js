/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Load_FailedInputs */

const en_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t load the suggestions`)
};

const es_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las sugerencias`)
};

const de_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschläge konnten nicht geladen werden`)
};

const fr_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les suggestions`)
};

const it_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i suggerimenti`)
};

const nl_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de suggesties niet laden`)
};

const pl_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać sugestii`)
};

const pt_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as sugestões`)
};

const ru_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить предложения`)
};

const sv_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ladda förslagen`)
};

const tr_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öneriler yüklenemedi`)
};

const zh_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载建议`)
};

const ja_admin_recat_load_failed = /** @type {(inputs: Admin_Recat_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`候補を読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t load the suggestions" |
*
* @param {Admin_Recat_Load_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_load_failed = /** @type {((inputs?: Admin_Recat_Load_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Load_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_load_failed(inputs)
	if (locale === "de") return de_admin_recat_load_failed(inputs)
	if (locale === "fr") return fr_admin_recat_load_failed(inputs)
	if (locale === "it") return it_admin_recat_load_failed(inputs)
	if (locale === "nl") return nl_admin_recat_load_failed(inputs)
	if (locale === "pl") return pl_admin_recat_load_failed(inputs)
	if (locale === "pt") return pt_admin_recat_load_failed(inputs)
	if (locale === "ru") return ru_admin_recat_load_failed(inputs)
	if (locale === "sv") return sv_admin_recat_load_failed(inputs)
	if (locale === "tr") return tr_admin_recat_load_failed(inputs)
	if (locale === "zh") return zh_admin_recat_load_failed(inputs)
	if (locale === "ja") return ja_admin_recat_load_failed(inputs)
	return en_admin_recat_load_failed(inputs)
});
