/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unavailable_DetailInputs */

const en_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The site is under maintenance or overloaded. Try again in a few minutes.`)
};

const es_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El sitio está en mantenimiento o sobrecargado. Vuelve a intentarlo en unos minutos.`)
};

const de_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Seite wird gewartet oder ist überlastet. Versuch es in ein paar Minuten erneut.`)
};

const fr_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le site est en maintenance ou surchargé. Réessayez dans quelques minutes.`)
};

const it_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il sito è in manutenzione o sovraccarico. Riprova tra qualche minuto.`)
};

const nl_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De site is in onderhoud of overbelast. Probeer het over een paar minuten opnieuw.`)
};

const pl_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona jest w trakcie konserwacji lub przeciążona. Spróbuj ponownie za kilka minut.`)
};

const pt_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O site está em manutenção ou sobrecarregado. Tente de novo em alguns minutos.`)
};

const ru_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт на обслуживании или перегружен. Попробуйте снова через несколько минут.`)
};

const sv_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sajten underhålls eller är överbelastad. Försök igen om några minuter.`)
};

const tr_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site bakımda ya da aşırı yüklü. Birkaç dakika sonra tekrar dene.`)
};

const zh_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站正在维护或负载过高。请几分钟后重试。`)
};

const ja_errors_code_unavailable_detail = /** @type {(inputs: Errors_Code_Unavailable_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトはメンテナンス中か混み合っています。数分後にもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The site is under maintenance or overloaded. Try again in a few minutes." |
*
* @param {Errors_Code_Unavailable_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unavailable_detail = /** @type {((inputs?: Errors_Code_Unavailable_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unavailable_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unavailable_detail(inputs)
	if (locale === "de") return de_errors_code_unavailable_detail(inputs)
	if (locale === "fr") return fr_errors_code_unavailable_detail(inputs)
	if (locale === "it") return it_errors_code_unavailable_detail(inputs)
	if (locale === "nl") return nl_errors_code_unavailable_detail(inputs)
	if (locale === "pl") return pl_errors_code_unavailable_detail(inputs)
	if (locale === "pt") return pt_errors_code_unavailable_detail(inputs)
	if (locale === "ru") return ru_errors_code_unavailable_detail(inputs)
	if (locale === "sv") return sv_errors_code_unavailable_detail(inputs)
	if (locale === "tr") return tr_errors_code_unavailable_detail(inputs)
	if (locale === "zh") return zh_errors_code_unavailable_detail(inputs)
	if (locale === "ja") return ja_errors_code_unavailable_detail(inputs)
	return en_errors_code_unavailable_detail(inputs)
});
