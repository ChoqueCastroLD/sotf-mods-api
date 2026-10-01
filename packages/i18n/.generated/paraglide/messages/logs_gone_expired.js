/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Gone_ExpiredInputs */

const en_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared logs are deleted automatically after 24 hours. Ask for a new link or share the log again.`)
};

const es_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los logs compartidos se borran automáticamente a las 24 horas. Pide un enlace nuevo o comparte el log otra vez.`)
};

const de_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteilte Logs werden nach 24 Stunden automatisch gelöscht. Bitte um einen neuen Link oder teile das Log erneut.`)
};

const fr_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les logs partagés sont supprimés automatiquement après 24 heures. Demandez un nouveau lien ou partagez de nouveau le log.`)
};

const it_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I log condivisi vengono eliminati automaticamente dopo 24 ore. Chiedi un nuovo link o condividi di nuovo il log.`)
};

const nl_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeelde logs worden na 24 uur automatisch verwijderd. Vraag om een nieuwe link of deel de log opnieuw.`)
};

const pl_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnione logi są usuwane automatycznie po 24 godzinach. Poproś o nowy link lub udostępnij log ponownie.`)
};

const pt_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os logs partilhados são apagados automaticamente ao fim de 24 horas. Peça uma nova ligação ou partilhe o log outra vez.`)
};

const ru_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общие логи автоматически удаляются через 24 часа. Попросите новую ссылку или поделитесь логом снова.`)
};

const sv_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delade loggar raderas automatiskt efter 24 timmar. Be om en ny länk eller dela loggen igen.`)
};

const tr_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paylaşılan loglar 24 saat sonra otomatik olarak silinir. Yeni bir bağlantı isteyin veya logu yeniden paylaşın.`)
};

const zh_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共享日志会在 24 小时后自动删除。请索取新链接，或重新分享日志。`)
};

const ja_logs_gone_expired = /** @type {(inputs: Logs_Gone_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有ログは 24 時間後に自動で削除されます。新しいリンクを依頼するか、ログを再度共有してください。`)
};

/**
* | output |
* | --- |
* | "Shared logs are deleted automatically after 24 hours. Ask for a new link or share the log again." |
*
* @param {Logs_Gone_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_gone_expired = /** @type {((inputs?: Logs_Gone_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Gone_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_gone_expired(inputs)
	if (locale === "de") return de_logs_gone_expired(inputs)
	if (locale === "fr") return fr_logs_gone_expired(inputs)
	if (locale === "it") return it_logs_gone_expired(inputs)
	if (locale === "nl") return nl_logs_gone_expired(inputs)
	if (locale === "pl") return pl_logs_gone_expired(inputs)
	if (locale === "pt") return pt_logs_gone_expired(inputs)
	if (locale === "ru") return ru_logs_gone_expired(inputs)
	if (locale === "sv") return sv_logs_gone_expired(inputs)
	if (locale === "tr") return tr_logs_gone_expired(inputs)
	if (locale === "zh") return zh_logs_gone_expired(inputs)
	if (locale === "ja") return ja_logs_gone_expired(inputs)
	return en_logs_gone_expired(inputs)
});
