/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_Custom_HintInputs */

const en_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are using your own image. Reroll to go back to a generated terrain.`)
};

const es_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estás usando tu propia imagen. Genera un terreno para volver al banner generado.`)
};

const de_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du verwendest ein eigenes Bild. Würfle ein Gelände, um zum generierten Banner zurückzukehren.`)
};

const fr_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous utilisez votre propre image. Générez un terrain pour revenir à une bannière générée.`)
};

const it_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stai usando un’immagine tua. Genera un terreno per tornare a un banner generato.`)
};

const nl_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gebruikt een eigen afbeelding. Genereer een terrein om terug te gaan naar een gegenereerde banner.`)
};

const pl_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używasz własnego obrazu. Wylosuj teren, aby wrócić do generowanego banera.`)
};

const pt_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está usando uma imagem própria. Gere um terreno para voltar a um banner gerado.`)
};

const ru_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас используется ваше изображение. Сгенерируйте местность, чтобы вернуться к созданному баннеру.`)
};

const sv_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du använder en egen bild. Slumpa en terräng för att gå tillbaka till en genererad banner.`)
};

const tr_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendi görselini kullanıyorsun. Oluşturulmuş afişe dönmek için bir arazi oluştur.`)
};

const zh_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你正在使用自己的图片。重新生成地形即可换回生成的横幅。`)
};

const ja_settings_banner_custom_hint = /** @type {(inputs: Settings_Banner_Custom_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の画像を使っています。地形を作り直すと生成バナーに戻せます。`)
};

/**
* | output |
* | --- |
* | "You are using your own image. Reroll to go back to a generated terrain." |
*
* @param {Settings_Banner_Custom_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_custom_hint = /** @type {((inputs?: Settings_Banner_Custom_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Custom_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_custom_hint(inputs)
	if (locale === "de") return de_settings_banner_custom_hint(inputs)
	if (locale === "fr") return fr_settings_banner_custom_hint(inputs)
	if (locale === "it") return it_settings_banner_custom_hint(inputs)
	if (locale === "nl") return nl_settings_banner_custom_hint(inputs)
	if (locale === "pl") return pl_settings_banner_custom_hint(inputs)
	if (locale === "pt") return pt_settings_banner_custom_hint(inputs)
	if (locale === "ru") return ru_settings_banner_custom_hint(inputs)
	if (locale === "sv") return sv_settings_banner_custom_hint(inputs)
	if (locale === "tr") return tr_settings_banner_custom_hint(inputs)
	if (locale === "zh") return zh_settings_banner_custom_hint(inputs)
	if (locale === "ja") return ja_settings_banner_custom_hint(inputs)
	return en_settings_banner_custom_hint(inputs)
});
