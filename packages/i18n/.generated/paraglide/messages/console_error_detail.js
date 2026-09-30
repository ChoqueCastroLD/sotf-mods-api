/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Error_DetailInputs */

const en_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something broke on our side. Try again, and if it keeps happening, send us the reference below.`)
};

const es_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo falló por nuestra parte. Inténtalo de nuevo y, si sigue pasando, envíanos la referencia de abajo.`)
};

const de_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei uns ist etwas schiefgelaufen. Versuch es noch einmal. Wenn es weiter passiert, schick uns die Referenz unten.`)
};

const fr_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu de notre côté. Réessayez et, si cela continue, envoyez-nous la référence ci-dessous.`)
};

const it_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa si è rotto da parte nostra. Riprova e, se continua a succedere, inviaci il riferimento qui sotto.`)
};

const nl_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging bij ons iets mis. Probeer het opnieuw en stuur ons de referentie hieronder als het blijft gebeuren.`)
};

const pl_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś się zepsuło po naszej stronie. Spróbuj ponownie, a jeśli to się powtarza, wyślij nam poniższy identyfikator.`)
};

const pt_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado do nosso lado. Tente de novo e, se continuar acontecendo, envie-nos a referência abaixo.`)
};

const ru_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У нас что-то сломалось. Попробуйте ещё раз, а если ошибка повторяется, пришлите нам код ниже.`)
};

const sv_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick sönder hos oss. Försök igen, och skicka referensen nedan till oss om det fortsätter.`)
};

const tr_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bizim tarafımızda bir şeyler bozuldu. Tekrar dene; sorun sürerse aşağıdaki referansı bize gönder.`)
};

const zh_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们这边出了点问题。请重试；如果问题持续，请把下面的参考编号发给我们。`)
};

const ja_console_error_detail = /** @type {(inputs: Console_Error_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`こちら側で問題が起きました。もう一度お試しください。繰り返し起きる場合は、下の参照番号をお送りください。`)
};

/**
* | output |
* | --- |
* | "Something broke on our side. Try again, and if it keeps happening, send us the reference below." |
*
* @param {Console_Error_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_error_detail = /** @type {((inputs?: Console_Error_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Error_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_error_detail(inputs)
	if (locale === "de") return de_console_error_detail(inputs)
	if (locale === "fr") return fr_console_error_detail(inputs)
	if (locale === "it") return it_console_error_detail(inputs)
	if (locale === "nl") return nl_console_error_detail(inputs)
	if (locale === "pl") return pl_console_error_detail(inputs)
	if (locale === "pt") return pt_console_error_detail(inputs)
	if (locale === "ru") return ru_console_error_detail(inputs)
	if (locale === "sv") return sv_console_error_detail(inputs)
	if (locale === "tr") return tr_console_error_detail(inputs)
	if (locale === "zh") return zh_console_error_detail(inputs)
	if (locale === "ja") return ja_console_error_detail(inputs)
	return en_console_error_detail(inputs)
});
