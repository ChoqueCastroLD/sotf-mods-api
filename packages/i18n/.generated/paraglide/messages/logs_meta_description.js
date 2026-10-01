/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Meta_DescriptionInputs */

const en_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste or drop a RedLoader, BepInEx or Player.log file and get a private link that deletes itself after 24 hours. Personal data is removed first.`)
};

const es_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega o suelta un archivo de RedLoader, BepInEx o Player.log y obtén un enlace privado que se borra solo a las 24 horas. Antes se eliminan los datos personales.`)
};

const de_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge eine RedLoader-, BepInEx- oder Player.log-Datei ein oder ziehe sie hinein und erhalte einen privaten Link, der sich nach 24 Stunden selbst löscht. Persönliche Daten werden vorher entfernt.`)
};

const fr_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez ou déposez un fichier RedLoader, BepInEx ou Player.log et obtenez un lien privé qui se supprime tout seul après 24 heures. Les données personnelles sont retirées avant.`)
};

const it_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla o trascina un file RedLoader, BepInEx o Player.log e ottieni un link privato che si cancella da solo dopo 24 ore. I dati personali vengono rimossi prima.`)
};

const nl_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak of sleep een RedLoader-, BepInEx- of Player.log-bestand en krijg een privélink die zichzelf na 24 uur verwijdert. Persoonlijke gegevens worden eerst verwijderd.`)
};

const pl_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej lub upuść plik RedLoader, BepInEx albo Player.log i uzyskaj prywatny link, który sam usunie się po 24 godzinach. Dane osobowe są wcześniej usuwane.`)
};

const pt_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole ou largue um ficheiro RedLoader, BepInEx ou Player.log e receba uma ligação privada que se apaga sozinha ao fim de 24 horas. Os dados pessoais são removidos antes.`)
};

const ru_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте или перетащите файл RedLoader, BepInEx или Player.log и получите приватную ссылку, которая удалится сама через 24 часа. Личные данные сначала удаляются.`)
};

const sv_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in eller släpp en RedLoader-, BepInEx- eller Player.log-fil och få en privat länk som raderas av sig själv efter 24 timmar. Personuppgifter tas bort först.`)
};

const tr_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir RedLoader, BepInEx veya Player.log dosyasını yapıştırın ya da bırakın, 24 saat sonra kendiliğinden silinen özel bir bağlantı alın. Kişisel veriler önce kaldırılır.`)
};

const zh_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`粘贴或拖入 RedLoader、BepInEx 或 Player.log 文件，获得一个 24 小时后自动删除的私密链接。个人信息会先被移除。`)
};

const ja_logs_meta_description = /** @type {(inputs: Logs_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader、BepInEx、Player.log のファイルを貼り付けるかドロップすると、24 時間後に自動で削除される非公開リンクが作成されます。個人情報は事前に除去されます。`)
};

/**
* | output |
* | --- |
* | "Paste or drop a RedLoader, BepInEx or Player.log file and get a private link that deletes itself after 24 hours. Personal data is removed first." |
*
* @param {Logs_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_meta_description = /** @type {((inputs?: Logs_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_meta_description(inputs)
	if (locale === "de") return de_logs_meta_description(inputs)
	if (locale === "fr") return fr_logs_meta_description(inputs)
	if (locale === "it") return it_logs_meta_description(inputs)
	if (locale === "nl") return nl_logs_meta_description(inputs)
	if (locale === "pl") return pl_logs_meta_description(inputs)
	if (locale === "pt") return pt_logs_meta_description(inputs)
	if (locale === "ru") return ru_logs_meta_description(inputs)
	if (locale === "sv") return sv_logs_meta_description(inputs)
	if (locale === "tr") return tr_logs_meta_description(inputs)
	if (locale === "zh") return zh_logs_meta_description(inputs)
	if (locale === "ja") return ja_logs_meta_description(inputs)
	return en_logs_meta_description(inputs)
});
