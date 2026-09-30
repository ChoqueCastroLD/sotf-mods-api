/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Export_ExpiryInputs */

const en_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The link expires on ${i?.when} (UTC). You can request a new export after that.`)
};

const es_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El enlace caduca el ${i?.when} (UTC). Después podrás pedir una exportación nueva.`)
};

const de_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Link läuft am ${i?.when} (UTC) ab. Danach kannst du einen neuen Export anfordern.`)
};

const fr_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le lien expire le ${i?.when} (UTC). Vous pourrez ensuite demander un nouvel export.`)
};

const it_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il link scade il ${i?.when} (UTC). Dopo potrai richiedere una nuova esportazione.`)
};

const nl_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De link verloopt op ${i?.when} (UTC). Daarna kun je een nieuwe export aanvragen.`)
};

const pl_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Link wygasa ${i?.when} (UTC). Potem możesz poprosić o nowy eksport.`)
};

const pt_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O link expira em ${i?.when} (UTC). Depois disso, você pode pedir uma nova exportação.`)
};

const ru_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ссылка истекает ${i?.when} (UTC). После этого можно запросить новый экспорт.`)
};

const sv_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Länken går ut ${i?.when} (UTC). Därefter kan du begära en ny export.`)
};

const tr_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bağlantı ${i?.when} (UTC) tarihinde sona erer. Sonrasında yeni bir dışa aktarım isteyebilirsin.`)
};

const zh_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`链接将于 ${i?.when}（UTC）失效。之后你可以重新申请导出。`)
};

const ja_emails_auth_export_expiry = /** @type {(inputs: Emails_Auth_Export_ExpiryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンクは ${i?.when}（UTC）に無効になります。その後は新しいエクスポートをリクエストできます。`)
};

/**
* | output |
* | --- |
* | "The link expires on {when} (UTC). You can request a new export after that." |
*
* @param {Emails_Auth_Export_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_expiry = /** @type {((inputs: Emails_Auth_Export_ExpiryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_ExpiryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_expiry(inputs)
	if (locale === "de") return de_emails_auth_export_expiry(inputs)
	if (locale === "fr") return fr_emails_auth_export_expiry(inputs)
	if (locale === "it") return it_emails_auth_export_expiry(inputs)
	if (locale === "nl") return nl_emails_auth_export_expiry(inputs)
	if (locale === "pl") return pl_emails_auth_export_expiry(inputs)
	if (locale === "pt") return pt_emails_auth_export_expiry(inputs)
	if (locale === "ru") return ru_emails_auth_export_expiry(inputs)
	if (locale === "sv") return sv_emails_auth_export_expiry(inputs)
	if (locale === "tr") return tr_emails_auth_export_expiry(inputs)
	if (locale === "zh") return zh_emails_auth_export_expiry(inputs)
	if (locale === "ja") return ja_emails_auth_export_expiry(inputs)
	return en_emails_auth_export_expiry(inputs)
});
