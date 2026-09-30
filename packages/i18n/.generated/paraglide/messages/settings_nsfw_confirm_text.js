/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_Confirm_TextInputs */

const en_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW mods can contain nudity or graphic content. You can hide them again at any time.`)
};

const es_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods NSFW pueden incluir desnudos o contenido explícito. Puedes volver a ocultarlos cuando quieras.`)
};

const de_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW-Mods können Nacktheit oder drastische Inhalte enthalten. Du kannst sie jederzeit wieder ausblenden.`)
};

const fr_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods NSFW peuvent contenir de la nudité ou des contenus explicites. Vous pouvez les masquer à nouveau à tout moment.`)
};

const it_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod NSFW possono contenere nudità o contenuti espliciti. Puoi nasconderle di nuovo in qualsiasi momento.`)
};

const nl_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW-mods kunnen naakt of expliciete inhoud bevatten. Je kunt ze altijd weer verbergen.`)
};

const pl_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody NSFW mogą zawierać nagość lub drastyczne treści. W każdej chwili możesz je znowu ukryć.`)
};

const pt_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods NSFW podem ter nudez ou conteúdo explícito. Você pode ocultá-los de novo quando quiser.`)
};

const ru_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды NSFW могут содержать наготу или откровенный контент. Их можно снова скрыть в любой момент.`)
};

const sv_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW-moddar kan innehålla nakenhet eller grafiskt innehåll. Du kan dölja dem igen när som helst.`)
};

const tr_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW modlar çıplaklık veya açık içerik barındırabilir. İstediğin zaman yeniden gizleyebilirsin.`)
};

const zh_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW 模组可能包含裸露或露骨内容。你可以随时再次隐藏。`)
};

const ja_settings_nsfw_confirm_text = /** @type {(inputs: Settings_Nsfw_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW のMODには裸や過激な内容が含まれる場合があります。いつでも再び非表示にできます。`)
};

/**
* | output |
* | --- |
* | "NSFW mods can contain nudity or graphic content. You can hide them again at any time." |
*
* @param {Settings_Nsfw_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_confirm_text = /** @type {((inputs?: Settings_Nsfw_Confirm_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_Confirm_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_confirm_text(inputs)
	if (locale === "de") return de_settings_nsfw_confirm_text(inputs)
	if (locale === "fr") return fr_settings_nsfw_confirm_text(inputs)
	if (locale === "it") return it_settings_nsfw_confirm_text(inputs)
	if (locale === "nl") return nl_settings_nsfw_confirm_text(inputs)
	if (locale === "pl") return pl_settings_nsfw_confirm_text(inputs)
	if (locale === "pt") return pt_settings_nsfw_confirm_text(inputs)
	if (locale === "ru") return ru_settings_nsfw_confirm_text(inputs)
	if (locale === "sv") return sv_settings_nsfw_confirm_text(inputs)
	if (locale === "tr") return tr_settings_nsfw_confirm_text(inputs)
	if (locale === "zh") return zh_settings_nsfw_confirm_text(inputs)
	if (locale === "ja") return ja_settings_nsfw_confirm_text(inputs)
	return en_settings_nsfw_confirm_text(inputs)
});
