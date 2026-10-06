/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_500_TextInputs */

const en_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The server had a problem. Reload the page in a minute, or go back to the home page.`)
};

const es_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El servidor tuvo un problema. Recarga la página en un minuto o vuelve al inicio.`)
};

const de_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf dem Server ist ein Problem aufgetreten. Lade die Seite in einer Minute neu oder gehe zurück zur Startseite.`)
};

const fr_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le serveur a rencontré un problème. Rechargez la page dans une minute ou retournez à l’accueil.`)
};

const it_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il server ha avuto un problema. Ricarica la pagina tra un minuto o torna alla home.`)
};

const nl_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De server had een probleem. Laad de pagina over een minuut opnieuw of ga terug naar de homepage.`)
};

const pl_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer napotkał problem. Odśwież stronę za minutę lub wróć na stronę główną.`)
};

const pt_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O servidor teve um problema. Recarregue a página em um minuto ou volte ao início.`)
};

const ru_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На сервере возникла проблема. Обновите страницу через минуту или вернитесь на главную.`)
};

const sv_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servern hade ett problem. Ladda om sidan om en minut eller gå tillbaka till startsidan.`)
};

const tr_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucuda bir sorun oluştu. Sayfayı bir dakika sonra yenileyin veya ana sayfaya dönün.`)
};

const zh_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器出现问题。请一分钟后刷新页面，或返回首页。`)
};

const ja_shell_500_text = /** @type {(inputs: Shell_500_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーで問題が発生しました。1分ほどしてからページを再読み込みするか、ホームに戻ってください。`)
};

/**
* | output |
* | --- |
* | "The server had a problem. Reload the page in a minute, or go back to the home page." |
*
* @param {Shell_500_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_500_text = /** @type {((inputs?: Shell_500_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_500_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_500_text(inputs)
	if (locale === "de") return de_shell_500_text(inputs)
	if (locale === "fr") return fr_shell_500_text(inputs)
	if (locale === "it") return it_shell_500_text(inputs)
	if (locale === "nl") return nl_shell_500_text(inputs)
	if (locale === "pl") return pl_shell_500_text(inputs)
	if (locale === "pt") return pt_shell_500_text(inputs)
	if (locale === "ru") return ru_shell_500_text(inputs)
	if (locale === "sv") return sv_shell_500_text(inputs)
	if (locale === "tr") return tr_shell_500_text(inputs)
	if (locale === "zh") return zh_shell_500_text(inputs)
	if (locale === "ja") return ja_shell_500_text(inputs)
	return en_shell_500_text(inputs)
});
