/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Settings_Verify_ResentInputs */

const en_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We sent a new link to ${i?.email}`)
};

const es_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hemos enviado un enlace nuevo a ${i?.email}`)
};

const de_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wir haben einen neuen Link an ${i?.email} gesendet`)
};

const fr_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nous avons envoyé un nouveau lien à ${i?.email}`)
};

const it_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abbiamo inviato un nuovo link a ${i?.email}`)
};

const nl_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We hebben een nieuwe link naar ${i?.email} gestuurd`)
};

const pl_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysłaliśmy nowy link na ${i?.email}`)
};

const pt_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviamos um novo link para ${i?.email}`)
};

const ru_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Мы отправили новую ссылку на ${i?.email}`)
};

const sv_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vi har skickat en ny länk till ${i?.email}`)
};

const tr_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} adresine yeni bir bağlantı gönderdik`)
};

const zh_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`我们已向 ${i?.email} 发送了新链接`)
};

const ja_settings_verify_resent = /** @type {(inputs: Settings_Verify_ResentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} に新しいリンクを送りました`)
};

/**
* | output |
* | --- |
* | "We sent a new link to {email}" |
*
* @param {Settings_Verify_ResentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_resent = /** @type {((inputs: Settings_Verify_ResentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_ResentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_resent(inputs)
	if (locale === "de") return de_settings_verify_resent(inputs)
	if (locale === "fr") return fr_settings_verify_resent(inputs)
	if (locale === "it") return it_settings_verify_resent(inputs)
	if (locale === "nl") return nl_settings_verify_resent(inputs)
	if (locale === "pl") return pl_settings_verify_resent(inputs)
	if (locale === "pt") return pt_settings_verify_resent(inputs)
	if (locale === "ru") return ru_settings_verify_resent(inputs)
	if (locale === "sv") return sv_settings_verify_resent(inputs)
	if (locale === "tr") return tr_settings_verify_resent(inputs)
	if (locale === "zh") return zh_settings_verify_resent(inputs)
	if (locale === "ja") return ja_settings_verify_resent(inputs)
	return en_settings_verify_resent(inputs)
});
