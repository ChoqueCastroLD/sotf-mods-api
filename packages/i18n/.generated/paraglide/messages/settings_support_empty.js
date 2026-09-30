/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Support_EmptyInputs */

const en_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You haven’t added a Ko-fi or Patreon link yet.`)
};

const es_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no has añadido un enlace de Ko-fi o Patreon.`)
};

const de_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keinen Ko-fi- oder Patreon-Link hinzugefügt.`)
};

const fr_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n’avez pas encore ajouté de lien Ko-fi ou Patreon.`)
};

const it_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora aggiunto un link Ko-fi o Patreon.`)
};

const nl_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen Ko-fi- of Patreon-link toegevoegd.`)
};

const pl_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie dodałeś jeszcze linku do Ko-fi ani Patreona.`)
};

const pt_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não adicionou um link de Ko-fi ou Patreon.`)
};

const ru_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы ещё не добавили ссылку на Ko-fi или Patreon.`)
};

const sv_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inte lagt till någon Ko-fi- eller Patreon-länk än.`)
};

const tr_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz bir Ko-fi veya Patreon bağlantısı eklemedin.`)
};

const zh_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有添加 Ko-fi 或 Patreon 链接。`)
};

const ja_settings_support_empty = /** @type {(inputs: Settings_Support_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi や Patreon のリンクはまだ追加されていません。`)
};

/**
* | output |
* | --- |
* | "You haven’t added a Ko-fi or Patreon link yet." |
*
* @param {Settings_Support_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_support_empty = /** @type {((inputs?: Settings_Support_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Support_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_support_empty(inputs)
	if (locale === "de") return de_settings_support_empty(inputs)
	if (locale === "fr") return fr_settings_support_empty(inputs)
	if (locale === "it") return it_settings_support_empty(inputs)
	if (locale === "nl") return nl_settings_support_empty(inputs)
	if (locale === "pl") return pl_settings_support_empty(inputs)
	if (locale === "pt") return pt_settings_support_empty(inputs)
	if (locale === "ru") return ru_settings_support_empty(inputs)
	if (locale === "sv") return sv_settings_support_empty(inputs)
	if (locale === "tr") return tr_settings_support_empty(inputs)
	if (locale === "zh") return zh_settings_support_empty(inputs)
	if (locale === "ja") return ja_settings_support_empty(inputs)
	return en_settings_support_empty(inputs)
});
