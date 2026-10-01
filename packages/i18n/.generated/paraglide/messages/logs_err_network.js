/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_NetworkInputs */

const en_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not reach the server. Check your connection and try again.`)
};

const es_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.`)
};

const de_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Server ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.`)
};

const fr_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.`)
};

const it_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile raggiungere il server. Controlla la connessione e riprova.`)
};

const nl_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De server is niet bereikbaar. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można połączyć się z serwerem. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível contactar o servidor. Verifique a ligação e tente de novo.`)
};

const ru_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось связаться с сервером. Проверьте соединение и повторите попытку.`)
};

const sv_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servern kunde inte nås. Kontrollera anslutningen och försök igen.`)
};

const tr_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucuya ulaşılamadı. Bağlantınızı kontrol edip tekrar deneyin.`)
};

const zh_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法连接服务器。请检查网络后重试。`)
};

const ja_logs_err_network = /** @type {(inputs: Logs_Err_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーに接続できません。接続を確認してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Could not reach the server. Check your connection and try again." |
*
* @param {Logs_Err_NetworkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_network = /** @type {((inputs?: Logs_Err_NetworkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_NetworkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_network(inputs)
	if (locale === "de") return de_logs_err_network(inputs)
	if (locale === "fr") return fr_logs_err_network(inputs)
	if (locale === "it") return it_logs_err_network(inputs)
	if (locale === "nl") return nl_logs_err_network(inputs)
	if (locale === "pl") return pl_logs_err_network(inputs)
	if (locale === "pt") return pt_logs_err_network(inputs)
	if (locale === "ru") return ru_logs_err_network(inputs)
	if (locale === "sv") return sv_logs_err_network(inputs)
	if (locale === "tr") return tr_logs_err_network(inputs)
	if (locale === "zh") return zh_logs_err_network(inputs)
	if (locale === "ja") return ja_logs_err_network(inputs)
	return en_logs_err_network(inputs)
});
