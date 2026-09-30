/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_Reroll_HintInputs */

const en_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New terrain previewed — choose «Use this terrain» to keep it.`)
};

const es_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa del terreno nuevo: elige «Usar este terreno» para quedártelo.`)
};

const de_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Gelände in der Vorschau – wähle „Dieses Gelände verwenden“, um es zu behalten.`)
};

const fr_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu du nouveau terrain — choisissez « Utiliser ce terrain » pour le garder.`)
};

const it_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima del nuovo terreno: scegli «Usa questo terreno» per tenerlo.`)
};

const nl_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld van nieuw terrein — kies ‘Dit terrein gebruiken’ om het te bewaren.`)
};

const pl_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd nowego terenu — wybierz „Użyj tego terenu”, aby go zachować.`)
};

const pt_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévia do novo terreno — escolha “Usar este terreno” para ficar com ele.`)
};

const ru_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр новой местности — выберите «Использовать эту местность», чтобы сохранить её.`)
};

const sv_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning av ny terräng — välj ”Använd den här terrängen” för att behålla den.`)
};

const tr_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni arazinin önizlemesi — saklamak için “Bu araziyi kullan”ı seç.`)
};

const zh_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在预览新地形——选择“使用此地形”即可保留。`)
};

const ja_settings_banner_reroll_hint = /** @type {(inputs: Settings_Banner_Reroll_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい地形をプレビュー中です。残すには「この地形を使う」を選んでください。`)
};

/**
* | output |
* | --- |
* | "New terrain previewed — choose «Use this terrain» to keep it." |
*
* @param {Settings_Banner_Reroll_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_reroll_hint = /** @type {((inputs?: Settings_Banner_Reroll_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Reroll_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_reroll_hint(inputs)
	if (locale === "de") return de_settings_banner_reroll_hint(inputs)
	if (locale === "fr") return fr_settings_banner_reroll_hint(inputs)
	if (locale === "it") return it_settings_banner_reroll_hint(inputs)
	if (locale === "nl") return nl_settings_banner_reroll_hint(inputs)
	if (locale === "pl") return pl_settings_banner_reroll_hint(inputs)
	if (locale === "pt") return pt_settings_banner_reroll_hint(inputs)
	if (locale === "ru") return ru_settings_banner_reroll_hint(inputs)
	if (locale === "sv") return sv_settings_banner_reroll_hint(inputs)
	if (locale === "tr") return tr_settings_banner_reroll_hint(inputs)
	if (locale === "zh") return zh_settings_banner_reroll_hint(inputs)
	if (locale === "ja") return ja_settings_banner_reroll_hint(inputs)
	return en_settings_banner_reroll_hint(inputs)
});
