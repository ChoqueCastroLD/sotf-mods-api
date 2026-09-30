/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_OfflineInputs */

const en_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline. Your changes are kept here and saved when you’re back.`)
};

const es_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conexión. Tus cambios se guardan aquí y se envían al volver.`)
};

const de_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline. Deine Änderungen bleiben hier und werden gespeichert, sobald du wieder online bist.`)
};

const fr_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hors ligne. Vos modifications restent ici et seront enregistrées à votre retour.`)
};

const it_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline. Le modifiche restano qui e vengono salvate al tuo ritorno.`)
};

const nl_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline. Je wijzigingen blijven hier en worden opgeslagen zodra je terug bent.`)
};

const pl_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak połączenia. Zmiany zostają tutaj i zapiszą się po powrocie do sieci.`)
};

const pt_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem conexão. Suas alterações ficam aqui e são salvas quando você voltar.`)
};

const ru_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сети. Изменения остаются здесь и сохранятся, когда вы вернётесь.`)
};

const sv_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline. Dina ändringar finns kvar här och sparas när du är tillbaka.`)
};

const tr_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışı. Değişikliklerin burada kalır ve döndüğünde kaydedilir.`)
};

const zh_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已离线。更改会保留在这里，恢复联网后自动保存。`)
};

const ja_upload_autosave_offline = /** @type {(inputs: Upload_Autosave_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインです。変更はここに残り、接続が戻ると保存されます。`)
};

/**
* | output |
* | --- |
* | "Offline. Your changes are kept here and saved when you’re back." |
*
* @param {Upload_Autosave_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_offline = /** @type {((inputs?: Upload_Autosave_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_offline(inputs)
	if (locale === "de") return de_upload_autosave_offline(inputs)
	if (locale === "fr") return fr_upload_autosave_offline(inputs)
	if (locale === "it") return it_upload_autosave_offline(inputs)
	if (locale === "nl") return nl_upload_autosave_offline(inputs)
	if (locale === "pl") return pl_upload_autosave_offline(inputs)
	if (locale === "pt") return pt_upload_autosave_offline(inputs)
	if (locale === "ru") return ru_upload_autosave_offline(inputs)
	if (locale === "sv") return sv_upload_autosave_offline(inputs)
	if (locale === "tr") return tr_upload_autosave_offline(inputs)
	if (locale === "zh") return zh_upload_autosave_offline(inputs)
	if (locale === "ja") return ja_upload_autosave_offline(inputs)
	return en_upload_autosave_offline(inputs)
});
