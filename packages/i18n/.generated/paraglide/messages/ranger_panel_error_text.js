/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Panel_Error_TextInputs */

const en_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong on our side. Try again in a moment.`)
};

const es_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo falló por nuestra parte. Vuelve a intentarlo en un momento.`)
};

const de_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.`)
};

const fr_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu de notre côté. Réessayez dans un instant.`)
};

const it_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto da parte nostra. Riprova tra poco.`)
};

const nl_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis aan onze kant. Probeer het zo opnieuw.`)
};

const pl_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak po naszej stronie. Spróbuj ponownie za chwilę.`)
};

const pt_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado do nosso lado. Tente de novo daqui a pouco.`)
};

const ru_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У нас что-то пошло не так. Попробуйте ещё раз чуть позже.`)
};

const sv_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel hos oss. Försök igen om en stund.`)
};

const tr_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bizim tarafımızda bir sorun oluştu. Birazdan tekrar deneyin.`)
};

const zh_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们这边出了点问题。请稍后再试。`)
};

const ja_ranger_panel_error_text = /** @type {(inputs: Ranger_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`こちら側で問題が発生しました。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong on our side. Try again in a moment." |
*
* @param {Ranger_Panel_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_panel_error_text = /** @type {((inputs?: Ranger_Panel_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Panel_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_panel_error_text(inputs)
	if (locale === "de") return de_ranger_panel_error_text(inputs)
	if (locale === "fr") return fr_ranger_panel_error_text(inputs)
	if (locale === "it") return it_ranger_panel_error_text(inputs)
	if (locale === "nl") return nl_ranger_panel_error_text(inputs)
	if (locale === "pl") return pl_ranger_panel_error_text(inputs)
	if (locale === "pt") return pt_ranger_panel_error_text(inputs)
	if (locale === "ru") return ru_ranger_panel_error_text(inputs)
	if (locale === "sv") return sv_ranger_panel_error_text(inputs)
	if (locale === "tr") return tr_ranger_panel_error_text(inputs)
	if (locale === "zh") return zh_ranger_panel_error_text(inputs)
	if (locale === "ja") return ja_ranger_panel_error_text(inputs)
	return en_ranger_panel_error_text(inputs)
});
