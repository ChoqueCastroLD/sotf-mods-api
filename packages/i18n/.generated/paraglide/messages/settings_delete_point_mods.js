/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Point_ModsInputs */

const en_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods are archived, or stay published without your name. You choose.`)
};

const es_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods se archivan o siguen publicados sin tu nombre: tú eliges.`)
};

const de_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods werden archiviert oder bleiben ohne deinen Namen veröffentlicht. Du entscheidest.`)
};

const fr_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods sont archivés ou restent publiés sans votre nom. C’est vous qui choisissez.`)
};

const it_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue mod vengono archiviate o restano pubblicate senza il tuo nome: scegli tu.`)
};

const nl_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods worden gearchiveerd of blijven gepubliceerd zonder je naam. Jij kiest.`)
};

const pl_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody zostaną zarchiwizowane albo pozostaną opublikowane bez twojego nazwiska. Ty wybierasz.`)
};

const pt_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods são arquivados ou continuam publicados sem o seu nome. Você escolhe.`)
};

const ru_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши моды будут отправлены в архив или останутся опубликованными без вашего имени. Выбирать вам.`)
};

const sv_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar arkiveras eller förblir publicerade utan ditt namn. Du väljer.`)
};

const tr_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların arşivlenir ya da adın olmadan yayında kalır. Sen seçersin.`)
};

const zh_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组会被归档，或在不显示你名字的情况下继续发布。由你选择。`)
};

const ja_settings_delete_point_mods = /** @type {(inputs: Settings_Delete_Point_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODはアーカイブするか、あなたの名前なしで公開したままにするかを選べます。`)
};

/**
* | output |
* | --- |
* | "Your mods are archived, or stay published without your name. You choose." |
*
* @param {Settings_Delete_Point_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_point_mods = /** @type {((inputs?: Settings_Delete_Point_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Point_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_point_mods(inputs)
	if (locale === "de") return de_settings_delete_point_mods(inputs)
	if (locale === "fr") return fr_settings_delete_point_mods(inputs)
	if (locale === "it") return it_settings_delete_point_mods(inputs)
	if (locale === "nl") return nl_settings_delete_point_mods(inputs)
	if (locale === "pl") return pl_settings_delete_point_mods(inputs)
	if (locale === "pt") return pt_settings_delete_point_mods(inputs)
	if (locale === "ru") return ru_settings_delete_point_mods(inputs)
	if (locale === "sv") return sv_settings_delete_point_mods(inputs)
	if (locale === "tr") return tr_settings_delete_point_mods(inputs)
	if (locale === "zh") return zh_settings_delete_point_mods(inputs)
	if (locale === "ja") return ja_settings_delete_point_mods(inputs)
	return en_settings_delete_point_mods(inputs)
});
