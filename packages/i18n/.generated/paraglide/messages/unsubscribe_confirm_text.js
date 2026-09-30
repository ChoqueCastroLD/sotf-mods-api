/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Confirm_TextInputs */

const en_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop these emails? You can turn them back on in Settings.`)
};

const es_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Dejar de recibir estos correos? Puedes volver a activarlos en Ajustes.`)
};

const de_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese E-Mails abbestellen? Du kannst sie in den Einstellungen wieder einschalten.`)
};

const fr_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus recevoir ces e-mails ? Vous pouvez les réactiver dans les Paramètres.`)
};

const it_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non vuoi più ricevere queste email? Puoi riattivarle nelle Impostazioni.`)
};

const nl_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze e-mails niet meer ontvangen? Je kunt ze weer aanzetten in Instellingen.`)
};

const pl_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłączyć te e-maile? Możesz je ponownie włączyć w Ustawieniach.`)
};

const pt_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parar de receber estes e-mails? Você pode reativá-los em Configurações.`)
};

const ru_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отписаться от этих писем? Их можно снова включить в настройках.`)
};

const sv_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta få de här mejlen? Du kan slå på dem igen i Inställningar.`)
};

const tr_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-postaları almayı bırakmak mı istiyorsun? Ayarlar’dan yeniden açabilirsin.`)
};

const zh_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不再接收这些邮件？你可以在设置中重新开启。`)
};

const ja_unsubscribe_confirm_text = /** @type {(inputs: Unsubscribe_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのメールの受信を停止しますか？設定からいつでも再開できます。`)
};

/**
* | output |
* | --- |
* | "Stop these emails? You can turn them back on in Settings." |
*
* @param {Unsubscribe_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_confirm_text = /** @type {((inputs?: Unsubscribe_Confirm_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Confirm_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_unsubscribe_confirm_text(inputs)
	if (locale === "de") return de_unsubscribe_confirm_text(inputs)
	if (locale === "fr") return fr_unsubscribe_confirm_text(inputs)
	if (locale === "it") return it_unsubscribe_confirm_text(inputs)
	if (locale === "nl") return nl_unsubscribe_confirm_text(inputs)
	if (locale === "pl") return pl_unsubscribe_confirm_text(inputs)
	if (locale === "pt") return pt_unsubscribe_confirm_text(inputs)
	if (locale === "ru") return ru_unsubscribe_confirm_text(inputs)
	if (locale === "sv") return sv_unsubscribe_confirm_text(inputs)
	if (locale === "tr") return tr_unsubscribe_confirm_text(inputs)
	if (locale === "zh") return zh_unsubscribe_confirm_text(inputs)
	if (locale === "ja") return ja_unsubscribe_confirm_text(inputs)
	return en_unsubscribe_confirm_text(inputs)
});
