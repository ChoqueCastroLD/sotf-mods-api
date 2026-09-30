/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Settings_Email_Sent_TextInputs */

const en_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We sent a confirmation link to ${i?.email}. Your address changes once you open it.`)
};

const es_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hemos enviado un enlace de confirmación a ${i?.email}. Tu dirección cambia en cuanto lo abras.`)
};

const de_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wir haben einen Bestätigungslink an ${i?.email} gesendet. Deine Adresse ändert sich, sobald du ihn öffnest.`)
};

const fr_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nous avons envoyé un lien de confirmation à ${i?.email}. Votre adresse change dès que vous l’ouvrez.`)
};

const it_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abbiamo inviato un link di conferma a ${i?.email}. Il tuo indirizzo cambia appena lo apri.`)
};

const nl_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We hebben een bevestigingslink naar ${i?.email} gestuurd. Je adres verandert zodra je hem opent.`)
};

const pl_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysłaliśmy link potwierdzający na ${i?.email}. Twój adres zmieni się, gdy go otworzysz.`)
};

const pt_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviamos um link de confirmação para ${i?.email}. Seu endereço muda assim que você abrir o link.`)
};

const ru_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Мы отправили ссылку для подтверждения на ${i?.email}. Адрес сменится, как только вы её откроете.`)
};

const sv_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vi har skickat en bekräftelselänk till ${i?.email}. Adressen ändras när du öppnar den.`)
};

const tr_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} adresine bir onay bağlantısı gönderdik. Bağlantıyı açtığında adresin değişir.`)
};

const zh_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`我们已向 ${i?.email} 发送确认链接。打开后你的地址就会更改。`)
};

const ja_settings_email_sent_text = /** @type {(inputs: Settings_Email_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} に確認リンクを送りました。リンクを開くとアドレスが変更されます。`)
};

/**
* | output |
* | --- |
* | "We sent a confirmation link to {email}. Your address changes once you open it." |
*
* @param {Settings_Email_Sent_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_sent_text = /** @type {((inputs: Settings_Email_Sent_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Sent_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_sent_text(inputs)
	if (locale === "de") return de_settings_email_sent_text(inputs)
	if (locale === "fr") return fr_settings_email_sent_text(inputs)
	if (locale === "it") return it_settings_email_sent_text(inputs)
	if (locale === "nl") return nl_settings_email_sent_text(inputs)
	if (locale === "pl") return pl_settings_email_sent_text(inputs)
	if (locale === "pt") return pt_settings_email_sent_text(inputs)
	if (locale === "ru") return ru_settings_email_sent_text(inputs)
	if (locale === "sv") return sv_settings_email_sent_text(inputs)
	if (locale === "tr") return tr_settings_email_sent_text(inputs)
	if (locale === "zh") return zh_settings_email_sent_text(inputs)
	if (locale === "ja") return ja_settings_email_sent_text(inputs)
	return en_settings_email_sent_text(inputs)
});
