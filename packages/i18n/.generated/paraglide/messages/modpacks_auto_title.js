/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Auto_TitleInputs */

const en_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added automatically as dependencies`)
};

const es_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadidos automáticamente como dependencias`)
};

const de_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch als Abhängigkeiten hinzugefügt`)
};

const fr_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutés automatiquement comme dépendances`)
};

const it_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunte automaticamente come dipendenze`)
};

const nl_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch toegevoegd als afhankelijkheden`)
};

const pl_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodane automatycznie jako zależności`)
};

const pt_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionados automaticamente como dependências`)
};

const ru_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлены автоматически как зависимости`)
};

const sv_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillagda automatiskt som beroenden`)
};

const tr_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık olarak otomatik eklenenler`)
};

const zh_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作为依赖自动添加`)
};

const ja_modpacks_auto_title = /** @type {(inputs: Modpacks_Auto_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係として自動追加`)
};

/**
* | output |
* | --- |
* | "Added automatically as dependencies" |
*
* @param {Modpacks_Auto_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_auto_title = /** @type {((inputs?: Modpacks_Auto_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Auto_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_auto_title(inputs)
	if (locale === "de") return de_modpacks_auto_title(inputs)
	if (locale === "fr") return fr_modpacks_auto_title(inputs)
	if (locale === "it") return it_modpacks_auto_title(inputs)
	if (locale === "nl") return nl_modpacks_auto_title(inputs)
	if (locale === "pl") return pl_modpacks_auto_title(inputs)
	if (locale === "pt") return pt_modpacks_auto_title(inputs)
	if (locale === "ru") return ru_modpacks_auto_title(inputs)
	if (locale === "sv") return sv_modpacks_auto_title(inputs)
	if (locale === "tr") return tr_modpacks_auto_title(inputs)
	if (locale === "zh") return zh_modpacks_auto_title(inputs)
	if (locale === "ja") return ja_modpacks_auto_title(inputs)
	return en_modpacks_auto_title(inputs)
});
