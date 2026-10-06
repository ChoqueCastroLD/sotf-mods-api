/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_Meta_DescriptionInputs */

const en_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No connection right now. Try again when you are back online.`)
};

const es_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conexión por ahora. Inténtalo de nuevo cuando vuelvas a estar en línea.`)
};

const de_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade keine Verbindung. Versuche es erneut, sobald du wieder online bist.`)
};

const fr_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune connexion pour le moment. Réessayez une fois de nouveau en ligne.`)
};

const it_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna connessione al momento. Riprova quando sei di nuovo online.`)
};

const nl_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op dit moment geen verbinding. Probeer het opnieuw zodra je weer online bent.`)
};

const pl_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak połączenia. Spróbuj ponownie, gdy wrócisz online.`)
};

const pt_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem conexão no momento. Tente novamente quando voltar a ficar online.`)
};

const ru_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет подключения. Повторите попытку, когда появится интернет.`)
};

const sv_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen anslutning just nu. Försök igen när du är online igen.`)
};

const tr_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda bağlantı yok. Çevrimiçi olduğunuzda tekrar deneyin.`)
};

const zh_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有网络连接。恢复在线后请重试。`)
};

const ja_shell_offline_meta_description = /** @type {(inputs: Shell_Offline_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在接続できません。オンラインに戻ったらもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "No connection right now. Try again when you are back online." |
*
* @param {Shell_Offline_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_meta_description = /** @type {((inputs?: Shell_Offline_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_meta_description(inputs)
	if (locale === "de") return de_shell_offline_meta_description(inputs)
	if (locale === "fr") return fr_shell_offline_meta_description(inputs)
	if (locale === "it") return it_shell_offline_meta_description(inputs)
	if (locale === "nl") return nl_shell_offline_meta_description(inputs)
	if (locale === "pl") return pl_shell_offline_meta_description(inputs)
	if (locale === "pt") return pt_shell_offline_meta_description(inputs)
	if (locale === "ru") return ru_shell_offline_meta_description(inputs)
	if (locale === "sv") return sv_shell_offline_meta_description(inputs)
	if (locale === "tr") return tr_shell_offline_meta_description(inputs)
	if (locale === "zh") return zh_shell_offline_meta_description(inputs)
	if (locale === "ja") return ja_shell_offline_meta_description(inputs)
	return en_shell_offline_meta_description(inputs)
});
