/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_ValidationInputs */

const en_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something in the kit isn’t valid. Check the fields and try again.`)
};

const es_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay algo en el kit que no es válido. Revisa los campos e inténtalo de nuevo.`)
};

const de_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas am Kit ist ungültig. Prüfe die Felder und versuch es erneut.`)
};

const fr_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelque chose n’est pas valide dans le kit. Vérifiez les champs et réessayez.`)
};

const it_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa nel kit non è valido. Controlla i campi e riprova.`)
};

const nl_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er klopt iets niet in de kit. Controleer de velden en probeer het opnieuw.`)
};

const pl_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś w zestawie jest nieprawidłowe. Sprawdź pola i spróbuj ponownie.`)
};

const pt_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo no kit não é válido. Confira os campos e tente de novo.`)
};

const ru_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В наборе что-то указано неверно. Проверьте поля и попробуйте снова.`)
};

const sv_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något i kitet är ogiltigt. Kontrollera fälten och försök igen.`)
};

const tr_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitte geçersiz bir şey var. Alanları kontrol edip tekrar dene.`)
};

const zh_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装中有内容无效，请检查后重试。`)
};

const ja_kits_error_validation = /** @type {(inputs: Kits_Error_ValidationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに無効な内容があります。入力内容を確認して再度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something in the kit isn’t valid. Check the fields and try again." |
*
* @param {Kits_Error_ValidationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_validation = /** @type {((inputs?: Kits_Error_ValidationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_ValidationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_validation(inputs)
	if (locale === "de") return de_kits_error_validation(inputs)
	if (locale === "fr") return fr_kits_error_validation(inputs)
	if (locale === "it") return it_kits_error_validation(inputs)
	if (locale === "nl") return nl_kits_error_validation(inputs)
	if (locale === "pl") return pl_kits_error_validation(inputs)
	if (locale === "pt") return pt_kits_error_validation(inputs)
	if (locale === "ru") return ru_kits_error_validation(inputs)
	if (locale === "sv") return sv_kits_error_validation(inputs)
	if (locale === "tr") return tr_kits_error_validation(inputs)
	if (locale === "zh") return zh_kits_error_validation(inputs)
	if (locale === "ja") return ja_kits_error_validation(inputs)
	return en_kits_error_validation(inputs)
});
