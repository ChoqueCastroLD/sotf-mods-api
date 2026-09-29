/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Internal_DetailInputs */

const en_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It’s not you, it’s us. We’re on it; try again in a few minutes.`)
};

const es_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es culpa tuya, es nuestra. Ya estamos en ello; vuelve a intentarlo en unos minutos.`)
};

const de_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es liegt nicht an dir, sondern an uns. Wir kümmern uns darum; versuch es in ein paar Minuten erneut.`)
};

const fr_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce n’est pas vous, c’est nous. Nous nous en occupons ; réessayez dans quelques minutes.`)
};

const it_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è colpa tua, è nostra. Ci stiamo lavorando; riprova tra qualche minuto.`)
};

const nl_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het ligt niet aan jou, maar aan ons. We zijn ermee bezig; probeer het over een paar minuten opnieuw.`)
};

const pl_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie twoja wina, tylko nasza. Już się tym zajmujemy; spróbuj ponownie za kilka minut.`)
};

const pt_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é você, somos nós. Já estamos resolvendo; tente de novo em alguns minutos.`)
};

const ru_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дело не в вас, а в нас. Мы уже чиним; попробуйте снова через несколько минут.`)
};

const sv_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det är inte ditt fel, det är vårt. Vi jobbar på det; försök igen om några minuter.`)
};

const tr_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senden değil, bizden kaynaklı. Üzerinde çalışıyoruz; birkaç dakika sonra tekrar dene.`)
};

const zh_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是你的问题，是我们的。我们正在处理，请几分钟后重试。`)
};

const ja_errors_code_internal_detail = /** @type {(inputs: Errors_Code_Internal_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因はあなたではなく、こちら側にあります。対応中ですので、数分後にもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "It’s not you, it’s us. We’re on it; try again in a few minutes." |
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
