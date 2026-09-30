/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Picker_ErrorInputs */

const en_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search failed. Try again.`)
};

const es_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La búsqueda falló. Inténtalo de nuevo.`)
};

const de_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche fehlgeschlagen. Versuch es noch einmal.`)
};

const fr_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche a échoué. Réessayez.`)
};

const it_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La ricerca non è riuscita. Riprova.`)
};

const nl_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken is mislukt. Probeer het opnieuw.`)
};

const pl_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie nie powiodło się. Spróbuj ponownie.`)
};

const pt_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A busca falhou. Tente de novo.`)
};

const ru_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск не удался. Попробуйте ещё раз.`)
};

const sv_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökningen misslyckades. Försök igen.`)
};

const tr_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama başarısız oldu. Yeniden dene.`)
};

const zh_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索失败，请重试。`)
};

const ja_admin_picker_error = /** @type {(inputs: Admin_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索に失敗しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Search failed. Try again." |
*
* @param {Admin_Picker_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_picker_error = /** @type {((inputs?: Admin_Picker_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Picker_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_picker_error(inputs)
	if (locale === "de") return de_admin_picker_error(inputs)
	if (locale === "fr") return fr_admin_picker_error(inputs)
	if (locale === "it") return it_admin_picker_error(inputs)
	if (locale === "nl") return nl_admin_picker_error(inputs)
	if (locale === "pl") return pl_admin_picker_error(inputs)
	if (locale === "pt") return pt_admin_picker_error(inputs)
	if (locale === "ru") return ru_admin_picker_error(inputs)
	if (locale === "sv") return sv_admin_picker_error(inputs)
	if (locale === "tr") return tr_admin_picker_error(inputs)
	if (locale === "zh") return zh_admin_picker_error(inputs)
	if (locale === "ja") return ja_admin_picker_error(inputs)
	return en_admin_picker_error(inputs)
});
