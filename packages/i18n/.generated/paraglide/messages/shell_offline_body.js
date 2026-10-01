/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_BodyInputs */

const en_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We can’t reach the island right now. Check your connection and try again.`)
};

const es_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no podemos llegar a la isla. Revisa tu conexión e inténtalo de nuevo.`)
};

const de_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Insel ist gerade nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.`)
};

const fr_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de joindre l’île pour le moment. Vérifiez votre connexion et réessayez.`)
};

const it_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non riusciamo a raggiungere l’isola. Controlla la connessione e riprova.`)
};

const nl_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We kunnen het eiland nu niet bereiken. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możemy teraz dotrzeć na wyspę. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos chegar à ilha agora. Verifique sua conexão e tente novamente.`)
};

const ru_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас не удаётся добраться до острова. Проверьте подключение и повторите попытку.`)
};

const sv_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi når inte ön just nu. Kontrollera anslutningen och försök igen.`)
};

const tr_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda adaya ulaşamıyoruz. Bağlantını kontrol edip tekrar dene.`)
};

const zh_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时无法连接到小岛。请检查网络后重试。`)
};

const ja_shell_offline_body = /** @type {(inputs: Shell_Offline_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いまは島に接続できません。通信状況を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We can’t reach the island right now. Check your connection and try again." |
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
