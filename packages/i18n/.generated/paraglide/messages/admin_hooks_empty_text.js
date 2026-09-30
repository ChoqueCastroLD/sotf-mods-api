/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Empty_TextInputs */

const en_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a webhook in the Discord channel settings and paste its address here.`)
};

const es_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un webhook en los ajustes del canal de Discord y pega aquí su dirección.`)
};

const de_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle in den Kanaleinstellungen von Discord einen Webhook und füge seine Adresse hier ein.`)
};

const fr_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un webhook dans les paramètres du salon Discord et collez son adresse ici.`)
};

const it_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un webhook nelle impostazioni del canale Discord e incolla qui il suo indirizzo.`)
};

const nl_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een webhook in de kanaalinstellingen van Discord en plak het adres hier.`)
};

const pl_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz webhook w ustawieniach kanału na Discordzie i wklej tu jego adres.`)
};

const pt_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um webhook nas configurações do canal do Discord e cole o endereço aqui.`)
};

const ru_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте вебхук в настройках канала Discord и вставьте сюда его адрес.`)
};

const sv_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa en webhook i kanalinställningarna i Discord och klistra in adressen här.`)
};

const tr_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord kanal ayarlarında bir webhook oluştur ve adresini buraya yapıştır.`)
};

const zh_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Discord 频道设置中创建一个 Webhook，然后把地址粘贴到这里。`)
};

const ja_admin_hooks_empty_text = /** @type {(inputs: Admin_Hooks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord のチャンネル設定で Webhook を作成し、そのアドレスをここに貼り付けてください。`)
};

/**
* | output |
* | --- |
* | "Create a webhook in the Discord channel settings and paste its address here." |
*
* @param {Admin_Hooks_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_empty_text = /** @type {((inputs?: Admin_Hooks_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_empty_text(inputs)
	if (locale === "de") return de_admin_hooks_empty_text(inputs)
	if (locale === "fr") return fr_admin_hooks_empty_text(inputs)
	if (locale === "it") return it_admin_hooks_empty_text(inputs)
	if (locale === "nl") return nl_admin_hooks_empty_text(inputs)
	if (locale === "pl") return pl_admin_hooks_empty_text(inputs)
	if (locale === "pt") return pt_admin_hooks_empty_text(inputs)
	if (locale === "ru") return ru_admin_hooks_empty_text(inputs)
	if (locale === "sv") return sv_admin_hooks_empty_text(inputs)
	if (locale === "tr") return tr_admin_hooks_empty_text(inputs)
	if (locale === "zh") return zh_admin_hooks_empty_text(inputs)
	if (locale === "ja") return ja_admin_hooks_empty_text(inputs)
	return en_admin_hooks_empty_text(inputs)
});
