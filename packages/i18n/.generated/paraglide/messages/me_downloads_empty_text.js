/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Empty_TextInputs */

const en_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download a mod while signed in and it shows up here, with an alert when a new version is out.`)
};

const es_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga un mod con la sesión iniciada y aparecerá aquí, con un aviso cuando salga una versión nueva.`)
};

const de_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade angemeldet einen Mod herunter, dann erscheint er hier – mit einem Hinweis, sobald eine neue Version erscheint.`)
};

const fr_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez un mod en étant connecté et il apparaîtra ici, avec une alerte dès qu’une nouvelle version sort.`)
};

const it_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica una mod dopo aver effettuato l’accesso e apparirà qui, con un avviso quando esce una nuova versione.`)
};

const nl_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download ingelogd een mod en hij verschijnt hier, met een melding zodra er een nieuwe versie is.`)
};

const pl_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz mod po zalogowaniu, a pojawi się tutaj z powiadomieniem, gdy wyjdzie nowa wersja.`)
};

const pt_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe um mod com a sessão iniciada e ele aparece aqui, com um aviso quando sair uma nova versão.`)
};

const ru_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте мод после входа, и он появится здесь — с уведомлением, когда выйдет новая версия.`)
};

const sv_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned en modd när du är inloggad så syns den här, med en avisering när en ny version kommer.`)
};

const tr_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturum açıkken bir mod indir; burada görünür ve yeni sürüm çıktığında uyarı alırsın.`)
};

const zh_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后下载模组，它就会出现在这里，有新版本时还会提醒你。`)
};

const ja_me_downloads_empty_text = /** @type {(inputs: Me_Downloads_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてMODをダウンロードするとここに表示され、新しいバージョンが出たらお知らせします。`)
};

/**
* | output |
* | --- |
* | "Download a mod while signed in and it shows up here, with an alert when a new version is out." |
*
* @param {Me_Downloads_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_empty_text = /** @type {((inputs?: Me_Downloads_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_empty_text(inputs)
	if (locale === "de") return de_me_downloads_empty_text(inputs)
	if (locale === "fr") return fr_me_downloads_empty_text(inputs)
	if (locale === "it") return it_me_downloads_empty_text(inputs)
	if (locale === "nl") return nl_me_downloads_empty_text(inputs)
	if (locale === "pl") return pl_me_downloads_empty_text(inputs)
	if (locale === "pt") return pt_me_downloads_empty_text(inputs)
	if (locale === "ru") return ru_me_downloads_empty_text(inputs)
	if (locale === "sv") return sv_me_downloads_empty_text(inputs)
	if (locale === "tr") return tr_me_downloads_empty_text(inputs)
	if (locale === "zh") return zh_me_downloads_empty_text(inputs)
	if (locale === "ja") return ja_me_downloads_empty_text(inputs)
	return en_me_downloads_empty_text(inputs)
});
