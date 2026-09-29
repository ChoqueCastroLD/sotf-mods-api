/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Server_TextInputs */

const en_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We’re on it. Reload the page in a minute, or head back home.`)
};

const es_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya estamos en ello. Recarga la página en un minuto o vuelve al inicio.`)
};

const de_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir kümmern uns darum. Lade die Seite in einer Minute neu oder geh zur Startseite.`)
};

const fr_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous nous en occupons. Rechargez la page dans une minute ou revenez à l’accueil.`)
};

const it_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ci stiamo lavorando. Ricarica la pagina tra un minuto o torna alla home.`)
};

const nl_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We zijn ermee bezig. Laad de pagina over een minuut opnieuw of ga terug naar de startpagina.`)
};

const pl_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Już się tym zajmujemy. Odśwież stronę za minutę albo wróć na stronę główną.`)
};

const pt_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já estamos resolvendo. Recarregue a página em um minuto ou volte para o início.`)
};

const ru_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы уже чиним. Обновите страницу через минуту или вернитесь на главную.`)
};

const sv_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi jobbar på det. Ladda om sidan om en minut eller gå tillbaka till startsidan.`)
};

const tr_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzerinde çalışıyoruz. Bir dakika sonra sayfayı yenile ya da ana sayfaya dön.`)
};

const zh_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们正在处理。一分钟后刷新页面，或返回首页。`)
};

const ja_errors_server_text = /** @type {(inputs: Errors_Server_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応中です。1 分ほどしてからページを再読み込みするか、ホームに戻ってください。`)
};

/**
* | output |
* | --- |
* | "We’re on it. Reload the page in a minute, or head back home." |
*
* @param {Errors_Server_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_server_text = /** @type {((inputs?: Errors_Server_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Server_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_server_text(inputs)
	if (locale === "de") return de_errors_server_text(inputs)
	if (locale === "fr") return fr_errors_server_text(inputs)
	if (locale === "it") return it_errors_server_text(inputs)
	if (locale === "nl") return nl_errors_server_text(inputs)
	if (locale === "pl") return pl_errors_server_text(inputs)
	if (locale === "pt") return pt_errors_server_text(inputs)
	if (locale === "ru") return ru_errors_server_text(inputs)
	if (locale === "sv") return sv_errors_server_text(inputs)
	if (locale === "tr") return tr_errors_server_text(inputs)
	if (locale === "zh") return zh_errors_server_text(inputs)
	if (locale === "ja") return ja_errors_server_text(inputs)
	return en_errors_server_text(inputs)
});
