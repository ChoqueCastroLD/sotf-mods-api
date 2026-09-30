/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Pinned_HiddenInputs */

const en_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some pinned mods aren’t public right now; they stay pinned and show again when they are.`)
};

const es_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunos mods fijados no son públicos ahora mismo; siguen fijados y volverán a verse cuando lo sean.`)
};

const de_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige angeheftete Mods sind gerade nicht öffentlich; sie bleiben angeheftet und erscheinen wieder, sobald sie es sind.`)
};

const fr_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains mods épinglés ne sont pas publics pour le moment ; ils restent épinglés et réapparaîtront quand ils le seront.`)
};

const it_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcune mod in evidenza non sono pubbliche al momento; restano in evidenza e ricompariranno quando lo saranno.`)
};

const nl_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige vastgezette mods zijn nu niet openbaar; ze blijven vastgezet en verschijnen weer zodra ze dat wel zijn.`)
};

const pl_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre przypięte mody nie są teraz publiczne; pozostają przypięte i pojawią się znów, gdy będą.`)
};

const pt_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns mods fixados não estão públicos agora; eles continuam fixados e voltam a aparecer quando estiverem.`)
};

const ru_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некоторые закреплённые моды сейчас не публичны; они остаются закреплёнными и появятся снова, когда станут публичными.`)
};

const sv_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissa fästa moddar är inte offentliga just nu; de förblir fästa och syns igen när de blir det.`)
};

const tr_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı sabitlenmiş modlar şu anda herkese açık değil; sabit kalırlar ve açık olduklarında yeniden görünürler.`)
};

const zh_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分置顶模组当前未公开；它们仍保持置顶，公开后会重新显示。`)
};

const ja_settings_pinned_hidden = /** @type {(inputs: Settings_Pinned_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`固定したMODの一部は現在非公開です。固定は維持され、公開されると再び表示されます。`)
};

/**
* | output |
* | --- |
* | "Some pinned mods aren’t public right now; they stay pinned and show again when they are." |
*
* @param {Settings_Pinned_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_hidden = /** @type {((inputs?: Settings_Pinned_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_hidden(inputs)
	if (locale === "de") return de_settings_pinned_hidden(inputs)
	if (locale === "fr") return fr_settings_pinned_hidden(inputs)
	if (locale === "it") return it_settings_pinned_hidden(inputs)
	if (locale === "nl") return nl_settings_pinned_hidden(inputs)
	if (locale === "pl") return pl_settings_pinned_hidden(inputs)
	if (locale === "pt") return pt_settings_pinned_hidden(inputs)
	if (locale === "ru") return ru_settings_pinned_hidden(inputs)
	if (locale === "sv") return sv_settings_pinned_hidden(inputs)
	if (locale === "tr") return tr_settings_pinned_hidden(inputs)
	if (locale === "zh") return zh_settings_pinned_hidden(inputs)
	if (locale === "ja") return ja_settings_pinned_hidden(inputs)
	return en_settings_pinned_hidden(inputs)
});
