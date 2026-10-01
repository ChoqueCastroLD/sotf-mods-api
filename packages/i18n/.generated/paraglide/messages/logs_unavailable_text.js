/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Unavailable_TextInputs */

const en_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We could not load this log right now. Try again in a moment.`)
};

const es_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos cargar este log ahora mismo. Inténtalo de nuevo en un momento.`)
};

const de_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Log konnte gerade nicht geladen werden. Versuche es gleich noch einmal.`)
};

const fr_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous n’avons pas pu charger ce log pour le moment. Réessayez dans un instant.`)
};

const it_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare questo log in questo momento. Riprova tra poco.`)
};

const nl_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden deze log nu niet laden. Probeer het zo meteen opnieuw.`)
};

const pl_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się teraz wczytać tego logu. Spróbuj ponownie za chwilę.`)
};

const pt_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar este log agora. Tente de novo daqui a pouco.`)
};

const ru_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас не удалось загрузить этот лог. Повторите чуть позже.`)
};

const sv_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte ladda loggen just nu. Försök igen om en stund.`)
};

const tr_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu log şu anda yüklenemedi. Biraz sonra tekrar deneyin.`)
};

const zh_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时无法加载此日志。请稍后重试。`)
};

const ja_logs_unavailable_text = /** @type {(inputs: Logs_Unavailable_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在このログを読み込めません。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We could not load this log right now. Try again in a moment." |
*
* @param {Logs_Unavailable_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_unavailable_text = /** @type {((inputs?: Logs_Unavailable_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Unavailable_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_unavailable_text(inputs)
	if (locale === "de") return de_logs_unavailable_text(inputs)
	if (locale === "fr") return fr_logs_unavailable_text(inputs)
	if (locale === "it") return it_logs_unavailable_text(inputs)
	if (locale === "nl") return nl_logs_unavailable_text(inputs)
	if (locale === "pl") return pl_logs_unavailable_text(inputs)
	if (locale === "pt") return pt_logs_unavailable_text(inputs)
	if (locale === "ru") return ru_logs_unavailable_text(inputs)
	if (locale === "sv") return sv_logs_unavailable_text(inputs)
	if (locale === "tr") return tr_logs_unavailable_text(inputs)
	if (locale === "zh") return zh_logs_unavailable_text(inputs)
	if (locale === "ja") return ja_logs_unavailable_text(inputs)
	return en_logs_unavailable_text(inputs)
});
