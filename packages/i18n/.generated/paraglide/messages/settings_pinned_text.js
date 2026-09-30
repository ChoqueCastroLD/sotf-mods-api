/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Pinned_TextInputs */

const en_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Choose up to ${max__number} of your mods to show first on your profile, in this order.`)
};

const es_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Elige hasta ${max__number} de tus mods para mostrarlos primero en tu perfil, en este orden.`)
};

const de_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Wähle bis zu ${max__number} deiner Mods, die zuerst auf deinem Profil erscheinen – in dieser Reihenfolge.`)
};

const fr_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Choisissez jusqu’à ${max__number} de vos mods à afficher en premier sur votre profil, dans cet ordre.`)
};

const it_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Scegli fino a ${max__number} tue mod da mostrare per prime sul profilo, in quest’ordine.`)
};

const nl_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Kies tot ${max__number} van je mods om als eerste op je profiel te tonen, in deze volgorde.`)
};

const pl_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Wybierz do ${max__number} swoich modów, które pojawią się pierwsze na profilu, w tej kolejności.`)
};

const pt_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Escolha até ${max__number} dos seus mods para aparecer primeiro no seu perfil, nesta ordem.`)
};

const ru_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Выберите до ${max__number} своих модов, которые будут показаны первыми в профиле, в этом порядке.`)
};

const sv_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Välj upp till ${max__number} av dina moddar som visas först på profilen, i den här ordningen.`)
};

const tr_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Profilinde ilk gösterilecek en fazla ${max__number} modunu bu sırayla seç.`)
};

const zh_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`最多选择 ${max__number} 个模组，按此顺序优先展示在你的个人资料上。`)
};

const ja_settings_pinned_text = /** @type {(inputs: Settings_Pinned_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`プロフィールの先頭に表示するMODを最大 ${max__number} 個、この順番で選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose up to {max__number} of your mods to show first on your profile, in this order." |
*
* @param {Settings_Pinned_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_text = /** @type {((inputs: Settings_Pinned_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_text(inputs)
	if (locale === "de") return de_settings_pinned_text(inputs)
	if (locale === "fr") return fr_settings_pinned_text(inputs)
	if (locale === "it") return it_settings_pinned_text(inputs)
	if (locale === "nl") return nl_settings_pinned_text(inputs)
	if (locale === "pl") return pl_settings_pinned_text(inputs)
	if (locale === "pt") return pt_settings_pinned_text(inputs)
	if (locale === "ru") return ru_settings_pinned_text(inputs)
	if (locale === "sv") return sv_settings_pinned_text(inputs)
	if (locale === "tr") return tr_settings_pinned_text(inputs)
	if (locale === "zh") return zh_settings_pinned_text(inputs)
	if (locale === "ja") return ja_settings_pinned_text(inputs)
	return en_settings_pinned_text(inputs)
});
