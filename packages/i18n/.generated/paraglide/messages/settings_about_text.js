/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_TextInputs */

const en_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How you appear on your profile, your mods and your comments.`)
};

const es_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo apareces en tu perfil, tus mods y tus comentarios.`)
};

const de_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie du auf deinem Profil, bei deinen Mods und in deinen Kommentaren erscheinst.`)
};

const fr_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment vous apparaissez sur votre profil, vos mods et vos commentaires.`)
};

const it_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come appari sul profilo, sulle tue mod e nei commenti.`)
};

const nl_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe je verschijnt op je profiel, bij je mods en in je reacties.`)
};

const pl_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak wyglądasz na profilu, przy modach i w komentarzach.`)
};

const pt_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como você aparece no seu perfil, nos seus mods e nos seus comentários.`)
};

const ru_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как вы выглядите в профиле, у своих модов и в комментариях.`)
};

const sv_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur du visas på din profil, dina moddar och i dina kommentarer.`)
};

const tr_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilinde, modlarında ve yorumlarında nasıl göründüğün.`)
};

const zh_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在个人资料、模组和评论中如何展示。`)
};

const ja_settings_about_text = /** @type {(inputs: Settings_About_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィール、MOD、コメントでのあなたの見え方。`)
};

/**
* | output |
* | --- |
* | "How you appear on your profile, your mods and your comments." |
*
* @param {Settings_About_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_about_text = /** @type {((inputs?: Settings_About_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_about_text(inputs)
	if (locale === "de") return de_settings_about_text(inputs)
	if (locale === "fr") return fr_settings_about_text(inputs)
	if (locale === "it") return it_settings_about_text(inputs)
	if (locale === "nl") return nl_settings_about_text(inputs)
	if (locale === "pl") return pl_settings_about_text(inputs)
	if (locale === "pt") return pt_settings_about_text(inputs)
	if (locale === "ru") return ru_settings_about_text(inputs)
	if (locale === "sv") return sv_settings_about_text(inputs)
	if (locale === "tr") return tr_settings_about_text(inputs)
	if (locale === "zh") return zh_settings_about_text(inputs)
	if (locale === "ja") return ja_settings_about_text(inputs)
	return en_settings_about_text(inputs)
});
