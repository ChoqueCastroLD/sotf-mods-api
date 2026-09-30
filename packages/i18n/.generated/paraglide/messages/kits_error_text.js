/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_TextInputs */

const en_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong on our side. Try again in a moment.`)
};

const es_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo ha fallado por nuestra parte. Inténtalo de nuevo en un momento.`)
};

const de_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.`)
};

const fr_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu de notre côté. Réessayez dans un instant.`)
};

const it_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto da parte nostra. Riprova tra un attimo.`)
};

const nl_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis aan onze kant. Probeer het zo opnieuw.`)
};

const pl_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak po naszej stronie. Spróbuj ponownie za chwilę.`)
};

const pt_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado do nosso lado. Tente de novo em instantes.`)
};

const ru_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У нас что-то пошло не так. Попробуйте ещё раз чуть позже.`)
};

const sv_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel hos oss. Försök igen om en stund.`)
};

const tr_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bizim tarafta bir sorun oluştu. Birazdan tekrar dene.`)
};

const zh_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们这边出了点问题，请稍后重试。`)
};

const ja_kits_error_text = /** @type {(inputs: Kits_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`こちら側で問題が発生しました。少し時間をおいて再度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong on our side. Try again in a moment." |
*
* @param {Kits_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_text = /** @type {((inputs?: Kits_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_text(inputs)
	if (locale === "de") return de_kits_error_text(inputs)
	if (locale === "fr") return fr_kits_error_text(inputs)
	if (locale === "it") return it_kits_error_text(inputs)
	if (locale === "nl") return nl_kits_error_text(inputs)
	if (locale === "pl") return pl_kits_error_text(inputs)
	if (locale === "pt") return pt_kits_error_text(inputs)
	if (locale === "ru") return ru_kits_error_text(inputs)
	if (locale === "sv") return sv_kits_error_text(inputs)
	if (locale === "tr") return tr_kits_error_text(inputs)
	if (locale === "zh") return zh_kits_error_text(inputs)
	if (locale === "ja") return ja_kits_error_text(inputs)
	return en_kits_error_text(inputs)
});
