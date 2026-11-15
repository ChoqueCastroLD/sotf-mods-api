/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_GenericInputs */

const en_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The config files couldn't be saved. Try again.`)
};

const es_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron guardar los archivos de configuración. Inténtalo de nuevo.`)
};

const de_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Konfigurationsdateien konnten nicht gespeichert werden. Versuche es erneut.`)
};

const fr_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer les fichiers de configuration. Réessayez.`)
};

const it_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare i file di configurazione. Riprova.`)
};

const nl_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de configuratiebestanden niet opslaan. Probeer het opnieuw.`)
};

const pl_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać plików konfiguracyjnych. Spróbuj ponownie.`)
};

const pt_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar os arquivos de configuração. Tente de novo.`)
};

const ru_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить файлы настроек. Попробуйте ещё раз.`)
};

const sv_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att spara konfigurationsfilerna. Försök igen.`)
};

const tr_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılandırma dosyaları kaydedilemedi. Tekrar dene.`)
};

const zh_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存配置文件，请重试。`)
};

const ja_modpacks_configs_err_generic = /** @type {(inputs: Modpacks_Configs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイルを保存できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The config files couldn't be saved. Try again." |
*
* @param {Modpacks_Configs_Err_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_generic = /** @type {((inputs?: Modpacks_Configs_Err_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_generic(inputs)
	if (locale === "de") return de_modpacks_configs_err_generic(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_generic(inputs)
	if (locale === "it") return it_modpacks_configs_err_generic(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_generic(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_generic(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_generic(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_generic(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_generic(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_generic(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_generic(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_generic(inputs)
	return en_modpacks_configs_err_generic(inputs)
});
