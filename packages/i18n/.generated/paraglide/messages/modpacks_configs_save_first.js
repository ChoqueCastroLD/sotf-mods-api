/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Save_FirstInputs */

const en_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save the modpack first, then add its config files.`)
};

const es_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda el modpack primero y luego añade sus archivos de configuración.`)
};

const de_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichere das Modpack zuerst und füge dann die Konfigurationsdateien hinzu.`)
};

const fr_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez d’abord le modpack, puis ajoutez ses fichiers de configuration.`)
};

const it_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva prima il modpack, poi aggiungi i file di configurazione.`)
};

const nl_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sla de modpack eerst op en voeg dan de configuratiebestanden toe.`)
};

const pl_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw zapisz modpack, potem dodaj pliki konfiguracyjne.`)
};

const pt_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salve o modpack primeiro e depois adicione os arquivos de configuração.`)
};

const ru_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала сохраните модпак, затем добавьте файлы настроек.`)
};

const sv_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara modpaketet först och lägg sedan till konfigurationsfilerna.`)
};

const tr_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce mod paketini kaydet, sonra yapılandırma dosyalarını ekle.`)
};

const zh_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先保存整合包，再添加配置文件。`)
};

const ja_modpacks_configs_save_first = /** @type {(inputs: Modpacks_Configs_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先に Modパックを保存してから、設定ファイルを追加してください。`)
};

/**
* | output |
* | --- |
* | "Save the modpack first, then add its config files." |
*
* @param {Modpacks_Configs_Save_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_save_first = /** @type {((inputs?: Modpacks_Configs_Save_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Save_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_save_first(inputs)
	if (locale === "de") return de_modpacks_configs_save_first(inputs)
	if (locale === "fr") return fr_modpacks_configs_save_first(inputs)
	if (locale === "it") return it_modpacks_configs_save_first(inputs)
	if (locale === "nl") return nl_modpacks_configs_save_first(inputs)
	if (locale === "pl") return pl_modpacks_configs_save_first(inputs)
	if (locale === "pt") return pt_modpacks_configs_save_first(inputs)
	if (locale === "ru") return ru_modpacks_configs_save_first(inputs)
	if (locale === "sv") return sv_modpacks_configs_save_first(inputs)
	if (locale === "tr") return tr_modpacks_configs_save_first(inputs)
	if (locale === "zh") return zh_modpacks_configs_save_first(inputs)
	if (locale === "ja") return ja_modpacks_configs_save_first(inputs)
	return en_modpacks_configs_save_first(inputs)
});
