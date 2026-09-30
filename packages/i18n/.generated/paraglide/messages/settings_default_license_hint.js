/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Default_License_HintInputs */

const en_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pre-selected when you publish a new mod; you can still change it per mod.`)
};

const es_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viene preseleccionada al publicar un mod nuevo; puedes cambiarla en cada mod.`)
};

const de_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorausgewählt, wenn du einen neuen Mod veröffentlichst; pro Mod änderbar.`)
};

const fr_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Présélectionnée quand vous publiez un nouveau mod ; modifiable pour chaque mod.`)
};

const it_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preselezionata quando pubblichi una nuova mod; puoi cambiarla per ogni mod.`)
};

const nl_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vooraf geselecteerd als je een nieuwe mod publiceert; per mod te wijzigen.`)
};

const pl_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybrana z góry przy publikacji nowego moda; możesz ją zmienić dla każdego moda.`)
};

const pt_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pré-selecionada ao publicar um novo mod; você pode mudar em cada mod.`)
};

const ru_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбирается заранее при публикации нового мода; её можно изменить для каждого мода.`)
};

const sv_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förvald när du publicerar en ny modd; kan ändras per modd.`)
};

const tr_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir mod yayımlarken önceden seçilir; her mod için değiştirebilirsin.`)
};

const zh_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布新模组时预先选中；每个模组仍可单独修改。`)
};

const ja_settings_default_license_hint = /** @type {(inputs: Settings_Default_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいMODを公開するときに事前選択されます。MODごとに変更できます。`)
};

/**
* | output |
* | --- |
* | "Pre-selected when you publish a new mod; you can still change it per mod." |
*
* @param {Settings_Default_License_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_default_license_hint = /** @type {((inputs?: Settings_Default_License_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Default_License_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_default_license_hint(inputs)
	if (locale === "de") return de_settings_default_license_hint(inputs)
	if (locale === "fr") return fr_settings_default_license_hint(inputs)
	if (locale === "it") return it_settings_default_license_hint(inputs)
	if (locale === "nl") return nl_settings_default_license_hint(inputs)
	if (locale === "pl") return pl_settings_default_license_hint(inputs)
	if (locale === "pt") return pt_settings_default_license_hint(inputs)
	if (locale === "ru") return ru_settings_default_license_hint(inputs)
	if (locale === "sv") return sv_settings_default_license_hint(inputs)
	if (locale === "tr") return tr_settings_default_license_hint(inputs)
	if (locale === "zh") return zh_settings_default_license_hint(inputs)
	if (locale === "ja") return ja_settings_default_license_hint(inputs)
	return en_settings_default_license_hint(inputs)
});
