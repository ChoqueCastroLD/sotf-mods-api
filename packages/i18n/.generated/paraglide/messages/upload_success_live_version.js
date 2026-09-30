/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Live_VersionInputs */

const en_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The new version of ${i?.name} is live and followers are being notified.`)
};

const es_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nueva versión de ${i?.name} está publicada y se está avisando a los seguidores.`)
};

const de_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die neue Version von ${i?.name} ist online, die Follower werden benachrichtigt.`)
};

const fr_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nouvelle version de ${i?.name} est en ligne et les abonnés sont prévenus.`)
};

const it_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nuova versione di ${i?.name} è online e i follower vengono avvisati.`)
};

const nl_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De nieuwe versie van ${i?.name} staat live en de volgers krijgen bericht.`)
};

const pl_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa wersja ${i?.name} jest dostępna, a obserwujący dostają powiadomienia.`)
};

const pt_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A nova versão de ${i?.name} está no ar e os seguidores estão sendo avisados.`)
};

const ru_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая версия «${i?.name}» вышла, подписчики получают оповещения.`)
};

const sv_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den nya versionen av ${i?.name} är ute och följarna meddelas.`)
};

const tr_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni sürüm yayında ve takipçilere bildiriliyor.`)
};

const zh_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新版本已上线，正在通知关注者。`)
};

const ja_upload_success_live_version = /** @type {(inputs: Upload_Success_Live_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいバージョンを公開し、フォロワーに通知しています。`)
};

/**
* | output |
* | --- |
* | "The new version of {name} is live and followers are being notified." |
*
* @param {Upload_Success_Live_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_live_version = /** @type {((inputs: Upload_Success_Live_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Live_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_live_version(inputs)
	if (locale === "de") return de_upload_success_live_version(inputs)
	if (locale === "fr") return fr_upload_success_live_version(inputs)
	if (locale === "it") return it_upload_success_live_version(inputs)
	if (locale === "nl") return nl_upload_success_live_version(inputs)
	if (locale === "pl") return pl_upload_success_live_version(inputs)
	if (locale === "pt") return pt_upload_success_live_version(inputs)
	if (locale === "ru") return ru_upload_success_live_version(inputs)
	if (locale === "sv") return sv_upload_success_live_version(inputs)
	if (locale === "tr") return tr_upload_success_live_version(inputs)
	if (locale === "zh") return zh_upload_success_live_version(inputs)
	if (locale === "ja") return ja_upload_success_live_version(inputs)
	return en_upload_success_live_version(inputs)
});
