/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Invalid_ValueInputs */

const en_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This value can’t be used. Check it and try again.`)
};

const es_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este valor no se puede usar. Revísalo y vuelve a intentarlo.`)
};

const de_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Wert kann nicht verwendet werden. Prüfe ihn und versuch es erneut.`)
};

const fr_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette valeur n’est pas utilisable. Vérifiez-la et réessayez.`)
};

const it_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo valore non si può usare. Controllalo e riprova.`)
};

const nl_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze waarde kan niet worden gebruikt. Controleer hem en probeer het opnieuw.`)
};

const pl_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tej wartości nie można użyć. Sprawdź ją i spróbuj ponownie.`)
};

const pt_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este valor não pode ser usado. Confira e tente de novo.`)
};

const ru_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это значение нельзя использовать. Проверьте его и попробуйте ещё раз.`)
};

const sv_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Värdet kan inte användas. Kontrollera det och försök igen.`)
};

const tr_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu değer kullanılamaz. Kontrol edip tekrar dene.`)
};

const zh_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此值无法使用，请检查后重试。`)
};

const ja_auth_error_invalid_value = /** @type {(inputs: Auth_Error_Invalid_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この値は使用できません。確認してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "This value can’t be used. Check it and try again." |
*
* @param {Auth_Error_Invalid_ValueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_invalid_value = /** @type {((inputs?: Auth_Error_Invalid_ValueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Invalid_ValueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_invalid_value(inputs)
	if (locale === "de") return de_auth_error_invalid_value(inputs)
	if (locale === "fr") return fr_auth_error_invalid_value(inputs)
	if (locale === "it") return it_auth_error_invalid_value(inputs)
	if (locale === "nl") return nl_auth_error_invalid_value(inputs)
	if (locale === "pl") return pl_auth_error_invalid_value(inputs)
	if (locale === "pt") return pt_auth_error_invalid_value(inputs)
	if (locale === "ru") return ru_auth_error_invalid_value(inputs)
	if (locale === "sv") return sv_auth_error_invalid_value(inputs)
	if (locale === "tr") return tr_auth_error_invalid_value(inputs)
	if (locale === "zh") return zh_auth_error_invalid_value(inputs)
	if (locale === "ja") return ja_auth_error_invalid_value(inputs)
	return en_auth_error_invalid_value(inputs)
});
