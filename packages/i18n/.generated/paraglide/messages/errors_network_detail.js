/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Network_DetailInputs */

const en_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We can’t reach SOTF Mods. Check your connection and try again.`)
};

const es_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No podemos conectar con SOTF Mods. Revisa tu conexión e inténtalo de nuevo.`)
};

const de_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir erreichen SOTF Mods nicht. Prüfe deine Verbindung und versuch es erneut.`)
};

const fr_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de joindre SOTF Mods. Vérifiez votre connexion et réessayez.`)
};

const it_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non riusciamo a raggiungere SOTF Mods. Controlla la connessione e riprova.`)
};

const nl_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We kunnen SOTF Mods niet bereiken. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możemy połączyć się z SOTF Mods. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos conectar ao SOTF Mods. Verifique sua conexão e tente de novo.`)
};

const ru_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удаётся связаться с SOTF Mods. Проверьте подключение и попробуйте снова.`)
};

const sv_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi når inte SOTF Mods. Kontrollera din anslutning och försök igen.`)
};

const tr_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’a ulaşamıyoruz. Bağlantını kontrol edip tekrar dene.`)
};

const zh_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法连接到 SOTF Mods。请检查网络连接后重试。`)
};

const ja_errors_network_detail = /** @type {(inputs: Errors_Network_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods に接続できません。接続を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We can’t reach SOTF Mods. Check your connection and try again." |
*
* @param {Errors_Network_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_network_detail = /** @type {((inputs?: Errors_Network_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Network_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_network_detail(inputs)
	if (locale === "de") return de_errors_network_detail(inputs)
	if (locale === "fr") return fr_errors_network_detail(inputs)
	if (locale === "it") return it_errors_network_detail(inputs)
	if (locale === "nl") return nl_errors_network_detail(inputs)
	if (locale === "pl") return pl_errors_network_detail(inputs)
	if (locale === "pt") return pt_errors_network_detail(inputs)
	if (locale === "ru") return ru_errors_network_detail(inputs)
	if (locale === "sv") return sv_errors_network_detail(inputs)
	if (locale === "tr") return tr_errors_network_detail(inputs)
	if (locale === "zh") return zh_errors_network_detail(inputs)
	if (locale === "ja") return ja_errors_network_detail(inputs)
	return en_errors_network_detail(inputs)
});
