/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_BodyInputs */

const en_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods cannot be reached right now. Check your connection and try again.`)
};

const es_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede acceder a SOTF Mods ahora mismo. Revisa tu conexión e inténtalo de nuevo.`)
};

const de_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods ist gerade nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.`)
};

const fr_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods est inaccessible pour le moment. Vérifiez votre connexion et réessayez.`)
};

const it_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento SOTF Mods non è raggiungibile. Controlla la connessione e riprova.`)
};

const nl_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods is nu niet bereikbaar. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods jest teraz niedostępne. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível acessar o SOTF Mods agora. Verifique sua conexão e tente novamente.`)
};

const ru_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods сейчас недоступен. Проверьте подключение и повторите попытку.`)
};

const sv_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods kan inte nås just nu. Kontrollera din anslutning och försök igen.`)
};

const tr_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods şu anda erişilemiyor. Bağlantınızı kontrol edip tekrar deneyin.`)
};

const zh_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前无法访问 SOTF Mods。请检查网络连接后重试。`)
};

const ja_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在 SOTF Mods に接続できません。通信状況を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "SOTF Mods cannot be reached right now. Check your connection and try again." |
*
* @param {Shell_Offline_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_body = /** @type {((inputs?: Shell_Offline_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_body(inputs)
	if (locale === "de") return de_shell_offline_body(inputs)
	if (locale === "fr") return fr_shell_offline_body(inputs)
	if (locale === "it") return it_shell_offline_body(inputs)
	if (locale === "nl") return nl_shell_offline_body(inputs)
	if (locale === "pl") return pl_shell_offline_body(inputs)
	if (locale === "pt") return pt_shell_offline_body(inputs)
	if (locale === "ru") return ru_shell_offline_body(inputs)
	if (locale === "sv") return sv_shell_offline_body(inputs)
	if (locale === "tr") return tr_shell_offline_body(inputs)
	if (locale === "zh") return zh_shell_offline_body(inputs)
	if (locale === "ja") return ja_shell_offline_body(inputs)
	return en_shell_offline_body(inputs)
});
