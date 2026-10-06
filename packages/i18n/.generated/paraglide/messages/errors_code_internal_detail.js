/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Internal_DetailInputs */

const en_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a problem on our side. We’re working on it. Try again in a few minutes.`)
};

const es_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El problema está de nuestro lado. Ya estamos trabajando en ello. Vuelve a intentarlo en unos minutos.`)
};

const de_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Problem liegt bei uns. Wir kümmern uns darum. Versuch es in ein paar Minuten erneut.`)
};

const fr_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le problème vient de nous. Nous y travaillons. Réessayez dans quelques minutes.`)
};

const it_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il problema è dalla nostra parte. Ci stiamo lavorando. Riprova tra qualche minuto.`)
};

const nl_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het probleem ligt bij ons. We zijn ermee bezig. Probeer het over een paar minuten opnieuw.`)
};

const pl_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problem leży po naszej stronie. Już nad tym pracujemy. Spróbuj ponownie za kilka minut.`)
};

const pt_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O problema é do nosso lado. Já estamos trabalhando nisso. Tente de novo em alguns minutos.`)
};

const ru_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проблема на нашей стороне. Мы уже работаем над ней. Попробуйте снова через несколько минут.`)
};

const sv_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemet ligger hos oss. Vi arbetar på det. Försök igen om några minuter.`)
};

const tr_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorun bizim tarafımızda. Üzerinde çalışıyoruz. Birkaç dakika sonra tekrar dene.`)
};

const zh_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`问题出在我们这边，我们正在处理。请几分钟后重试。`)
};

const ja_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`こちら側の問題です。対応中ですので、数分後にもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "This is a problem on our side. We’re working on it. Try again in a few minutes." |
*
* @param {Errors_Code_Internal_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_internal_detail = /** @type {((inputs?: Errors_Code_Internal_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Internal_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_internal_detail(inputs)
	if (locale === "de") return de_errors_code_internal_detail(inputs)
	if (locale === "fr") return fr_errors_code_internal_detail(inputs)
	if (locale === "it") return it_errors_code_internal_detail(inputs)
	if (locale === "nl") return nl_errors_code_internal_detail(inputs)
	if (locale === "pl") return pl_errors_code_internal_detail(inputs)
	if (locale === "pt") return pt_errors_code_internal_detail(inputs)
	if (locale === "ru") return ru_errors_code_internal_detail(inputs)
	if (locale === "sv") return sv_errors_code_internal_detail(inputs)
	if (locale === "tr") return tr_errors_code_internal_detail(inputs)
	if (locale === "zh") return zh_errors_code_internal_detail(inputs)
	if (locale === "ja") return ja_errors_code_internal_detail(inputs)
	return en_errors_code_internal_detail(inputs)
});
