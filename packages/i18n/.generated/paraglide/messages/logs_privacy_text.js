/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Privacy_TextInputs */

const en_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows user names in file paths, Steam IDs, IP addresses, e-mails, tokens and keys are replaced before the log is stored.`)
};

const es_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los nombres de usuario de Windows en las rutas, los Steam ID, las direcciones IP, los correos, los tokens y las claves se sustituyen antes de guardar el log.`)
};

const de_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows-Benutzernamen in Dateipfaden, Steam-IDs, IP-Adressen, E-Mail-Adressen, Tokens und Schlüssel werden ersetzt, bevor das Log gespeichert wird.`)
};

const fr_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les noms d’utilisateur Windows dans les chemins, les identifiants Steam, les adresses IP, les e-mails, les jetons et les clés sont remplacés avant l’enregistrement du log.`)
};

const it_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I nomi utente di Windows nei percorsi, gli ID Steam, gli indirizzi IP, le e-mail, i token e le chiavi vengono sostituiti prima di salvare il log.`)
};

const nl_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows-gebruikersnamen in bestandspaden, Steam-ID’s, IP-adressen, e-mailadressen, tokens en sleutels worden vervangen voordat de log wordt opgeslagen.`)
};

const pl_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwy użytkowników Windows w ścieżkach, identyfikatory Steam, adresy IP, e-maile, tokeny i klucze są zastępowane przed zapisaniem logu.`)
};

const pt_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os nomes de utilizador do Windows nos caminhos, os IDs Steam, os endereços IP, os e-mails, os tokens e as chaves são substituídos antes de o log ser guardado.`)
};

const ru_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имена пользователей Windows в путях, Steam ID, IP-адреса, e-mail, токены и ключи заменяются до сохранения лога.`)
};

const sv_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows-användarnamn i sökvägar, Steam-ID, IP-adresser, e-postadresser, tokens och nycklar ersätts innan loggen sparas.`)
};

const tr_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yollardaki Windows kullanıcı adları, Steam kimlikleri, IP adresleri, e-postalar, token ve anahtarlar log kaydedilmeden önce değiştirilir.`)
};

const zh_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`路径中的 Windows 用户名、Steam ID、IP 地址、邮箱、令牌和密钥会在保存日志前被替换。`)
};

const ja_logs_privacy_text = /** @type {(inputs: Logs_Privacy_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パス内の Windows ユーザー名、Steam ID、IP アドレス、メールアドレス、トークン、キーは、ログの保存前に置き換えられます。`)
};

/**
* | output |
* | --- |
* | "Windows user names in file paths, Steam IDs, IP addresses, e-mails, tokens and keys are replaced before the log is stored." |
*
* @param {Logs_Privacy_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_privacy_text = /** @type {((inputs?: Logs_Privacy_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Privacy_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_privacy_text(inputs)
	if (locale === "de") return de_logs_privacy_text(inputs)
	if (locale === "fr") return fr_logs_privacy_text(inputs)
	if (locale === "it") return it_logs_privacy_text(inputs)
	if (locale === "nl") return nl_logs_privacy_text(inputs)
	if (locale === "pl") return pl_logs_privacy_text(inputs)
	if (locale === "pt") return pt_logs_privacy_text(inputs)
	if (locale === "ru") return ru_logs_privacy_text(inputs)
	if (locale === "sv") return sv_logs_privacy_text(inputs)
	if (locale === "tr") return tr_logs_privacy_text(inputs)
	if (locale === "zh") return zh_logs_privacy_text(inputs)
	if (locale === "ja") return ja_logs_privacy_text(inputs)
	return en_logs_privacy_text(inputs)
});
