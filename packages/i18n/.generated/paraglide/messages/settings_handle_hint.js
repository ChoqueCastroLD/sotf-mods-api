/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Handle_HintInputs */

const en_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your profile address. Handles can’t be changed yet.`)
};

const es_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dirección de tu perfil. Por ahora no se puede cambiar.`)
};

const de_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Profiladresse. Handles lassen sich noch nicht ändern.`)
};

const fr_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’adresse de votre profil. Les identifiants ne peuvent pas encore être modifiés.`)
};

const it_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’indirizzo del tuo profilo. Per ora non si può cambiare.`)
};

const nl_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het adres van je profiel. Handles kunnen nog niet worden gewijzigd.`)
};

const pl_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres twojego profilu. Na razie nie można go zmienić.`)
};

const pt_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O endereço do seu perfil. Ainda não é possível mudá-lo.`)
};

const ru_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес вашего профиля. Пока его нельзя изменить.`)
};

const sv_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adressen till din profil. Den kan inte ändras än.`)
};

const tr_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilinin adresi. Kullanıcı adları henüz değiştirilemiyor.`)
};

const zh_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的个人资料地址。目前还不能更改。`)
};

const ja_settings_handle_hint = /** @type {(inputs: Settings_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールのアドレスです。現在は変更できません。`)
};

/**
* | output |
* | --- |
* | "Your profile address. Handles can’t be changed yet." |
*
* @param {Settings_Handle_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_handle_hint = /** @type {((inputs?: Settings_Handle_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Handle_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_handle_hint(inputs)
	if (locale === "de") return de_settings_handle_hint(inputs)
	if (locale === "fr") return fr_settings_handle_hint(inputs)
	if (locale === "it") return it_settings_handle_hint(inputs)
	if (locale === "nl") return nl_settings_handle_hint(inputs)
	if (locale === "pl") return pl_settings_handle_hint(inputs)
	if (locale === "pt") return pt_settings_handle_hint(inputs)
	if (locale === "ru") return ru_settings_handle_hint(inputs)
	if (locale === "sv") return sv_settings_handle_hint(inputs)
	if (locale === "tr") return tr_settings_handle_hint(inputs)
	if (locale === "zh") return zh_settings_handle_hint(inputs)
	if (locale === "ja") return ja_settings_handle_hint(inputs)
	return en_settings_handle_hint(inputs)
});
