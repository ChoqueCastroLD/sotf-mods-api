/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Submit_Ready_VersionInputs */

const en_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready. Followers are notified when the version goes live.`)
};

const es_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listo. Se avisa a los seguidores cuando la versión se publica.`)
};

const de_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereit. Follower werden benachrichtigt, sobald die Version online ist.`)
};

const fr_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêt. Les abonnés sont prévenus dès que la version est en ligne.`)
};

const it_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto. I follower vengono avvisati quando la versione è online.`)
};

const nl_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar. Volgers krijgen bericht zodra de versie live is.`)
};

const pl_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowe. Obserwujący zostaną powiadomieni, gdy wersja będzie dostępna.`)
};

const pt_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto. Os seguidores são avisados quando a versão é publicada.`)
};

const ru_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово. Подписчики получат оповещение, когда версия выйдет.`)
};

const sv_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klart. Följarna meddelas när versionen publiceras.`)
};

const tr_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazır. Sürüm yayına girince takipçilere bildirilir.`)
};

const zh_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备就绪。版本上线后会通知关注者。`)
};

const ja_upload_submit_ready_version = /** @type {(inputs: Upload_Submit_Ready_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`準備完了。バージョンが公開されるとフォロワーに通知されます。`)
};

/**
* | output |
* | --- |
* | "Ready. Followers are notified when the version goes live." |
*
* @param {Upload_Submit_Ready_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit_ready_version = /** @type {((inputs?: Upload_Submit_Ready_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Submit_Ready_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit_ready_version(inputs)
	if (locale === "de") return de_upload_submit_ready_version(inputs)
	if (locale === "fr") return fr_upload_submit_ready_version(inputs)
	if (locale === "it") return it_upload_submit_ready_version(inputs)
	if (locale === "nl") return nl_upload_submit_ready_version(inputs)
	if (locale === "pl") return pl_upload_submit_ready_version(inputs)
	if (locale === "pt") return pt_upload_submit_ready_version(inputs)
	if (locale === "ru") return ru_upload_submit_ready_version(inputs)
	if (locale === "sv") return sv_upload_submit_ready_version(inputs)
	if (locale === "tr") return tr_upload_submit_ready_version(inputs)
	if (locale === "zh") return zh_upload_submit_ready_version(inputs)
	if (locale === "ja") return ja_upload_submit_ready_version(inputs)
	return en_upload_submit_ready_version(inputs)
});
